import { useCallback } from "react";
import { useDispatch } from "react-redux"

import i18next from "i18next";

import { ServerError } from "../backend";
import { MethodError, ServerRequestMethods } from "../backend/methods";
import mockDataGenerator from "../backend/mockDataGenerator";
import { GeneralMethodConfigOptions, MethodName, MethodResponseData } from "../backend/types";
import { setActiveDialog, setPreloaderVisibility } from "../redux/globals/actions";

export default () => {
    const dispatch = useDispatch();
    const makeRequest = useCallback(async <method extends MethodName = MethodName>(
        methodName: method,
        { fetchOptions = {}, showModalLoader = true, handleError = true, ...postParams }: GeneralMethodConfigOptions & ServerRequestMethods[method]["postParams"]
    ): Promise<(MethodResponseData<method>) | { error: ServerError | Error }> => {
        if (showModalLoader) dispatch(setPreloaderVisibility(true));

        let formData: FormData = new FormData();
        Object.entries(postParams).forEach(([key, value]) => formData.append(key, value as string));

        try {
            const API_BASE = process.env.REACT_APP_API_URL;
            if (!API_BASE || (process.env.REACT_APP_MOCK_API_ENABLED || "").toLowerCase() === "true") {
                return await mockDataGenerator(methodName, postParams, fetchOptions.signal);
            }
            let fetchURL = new URL(API_BASE + "?" + window.location.search.slice(1));//api base + vk app params
            fetchURL.searchParams.append("method", methodName);
            let response = await fetch(fetchURL.toString(), {
                method: formData.keys.length ? "post" : "get",
                body: formData.keys.length ? formData : null,
                ...fetchOptions
            });
            let json = (await response.json()) as MethodError | MethodResponseData<typeof methodName>;

            if ("error" in json) {
                let { code, message } = json.error;
                throw new ServerError(message, code, methodName);
            }
            return json;
        } catch (err) {
            if (err.name === "AbortError") return { error: err };
            if (handleError) {
                dispatch(setActiveDialog({
                    type: "message",
                    title: i18next.t("Server Error"),
                    message: err instanceof ServerError ? i18next.t(err.error_code.toString(), {
                        ns: "serverErrorCodes",
                        defaultValue: err.message
                    }) : err.message
                }));
            } else {
                throw err;
            };
            return {
                error: err
            };
        } finally {
            if (showModalLoader) dispatch(setPreloaderVisibility(false));
        }
    }, [dispatch]);
    return makeRequest;
}