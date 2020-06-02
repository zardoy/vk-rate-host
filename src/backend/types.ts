import { ServerRequestMethods } from "./methods";
import { ServerError } from ".";

//TODO: namespace
//Util types

export type MethodName = keyof ServerRequestMethods;

type FetchConfigOptions = Parameters<typeof fetch>[1];

export type GeneralMethodConfigOptions = {
    fetchOptions?: Partial<FetchConfigOptions>,
    /** If true, handle any errors except `AbortError`. If false, must be handled with try/catch */
    handleError?: boolean,
    /** default: `true`*/
    showModalLoader?: boolean,
};

export type MethodResponseData<method extends MethodName> = ServerRequestMethods[method] extends {
    responseData: infer U
} ? U : {};