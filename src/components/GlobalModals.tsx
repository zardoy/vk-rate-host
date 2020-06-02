import React, { useCallback } from "react";
import { IonAlert, IonLoading } from "@ionic/react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../redux/types";
import { setActiveDialog } from "../redux/globals/actions";

interface Props {
}

let GlobalDialogs: React.FC<Props> = () => {
    let { t } = useTranslation();
    let dispatch = useDispatch();
    let hideDialog = useCallback(() => {
        dispatch(setActiveDialog(null));
    }, [dispatch]);
    let dialog = useSelector((state: AppState) => state.globals.activeDialog);
    let showPreloader = useSelector((state: AppState) => state.globals.preloaders);

    if (showPreloader) return <IonLoading
        isOpen
        translucent
    />;

    if (!dialog) return null;

    let params: Partial<React.ComponentProps<typeof IonAlert>> = {};

    switch (dialog.type) {
        case "message":
            params = {
                header: dialog.title || process.env.RATE_APP_NAME,
                message: dialog.message,
                buttons: [
                    {
                        text: "OK",
                        role: "cancel"
                    }
                ],
                ...(dialog.handler ? {
                    onDidDismiss: dialog.handler
                } : {})
            };
            break;
        case "destruction":
            params = {
                header: dialog.title,
                message: dialog.message,
                buttons: [
                    {
                        text: "OK",
                        role: "cancel"
                    },
                    {
                        text: dialog.confirmText,
                        role: "destructive",
                        handler: dialog.confirmHandler
                    }
                ]
            };
    }

    return <IonAlert
        isOpen
        backdropDismiss={false}
        onDidDismiss={hideDialog}
        translucent
        {...params}
    />;
}

export default GlobalDialogs;