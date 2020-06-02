import React from "react";
import { IonPage, IonHeader, IonToolbar, IonContent, IonButton } from "@ionic/react";
import { useTranslation } from "react-i18next";

interface Props {
    callback: () => any
}

let ReloadApp: React.FC<Props> = ({ callback }) => {
    let { t } = useTranslation();

    return <IonPage>
        <IonHeader>
            <IonToolbar>
                {t("Load Failed")}
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonButton expand="block" onClick={callback}>{t("Reload Data")}</IonButton>
        </IonContent>
    </IonPage>;
}

export default ReloadApp;