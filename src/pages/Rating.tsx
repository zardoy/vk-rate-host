import { IonButton, IonButtons, IonContent, IonFab, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonSpinner, IonTitle, IonToolbar, IonFabButton, IonNote, IonAvatar, IonSegment, IonSegmentButton } from "@ionic/react";
import { informationCircleOutline, star } from "ionicons/icons";
import React, { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import useServerRequest from "../hooks/useServerRequest";
import { setHostsRatingList } from "../redux/hosts/actions";
import { AppState } from "../redux/types";
import { setActiveDialog } from "../redux/globals/actions";

let RatingPage: React.FC = () => {
    let dispatch = useDispatch();
    let { t } = useTranslation();
    let makeRequest = useServerRequest();

    //REDUX
    let ratingLastUpdate = useSelector((state: AppState) => state.hosts.ratingLastUpdate);
    let ratingList = useSelector((state: AppState) => state.hosts.hostsRatingList);

    //CALLBACKS
    let changeSegment = useCallback((e: any) => {
        dispatch(setActiveDialog({
            type: "destruction",
            message: "Вы уверены, что хотите удалить все?",
            confirmHandler: () => { },
            confirmText: "дат",
            title: "DELETE?"
        }))
    }, []);
    let loadRating = useCallback(async () => {
        let response = await makeRequest("app.GetRatingList", {});
        if ("error" in response) return;
        dispatch(setHostsRatingList(response));
    }, [makeRequest, dispatch])

    useEffect(() => {
        if (!ratingLastUpdate || (Date.now() - ratingLastUpdate) / 1000 / 60 / 60 / 24 >= 1) {
            loadRating();
        }
    }, []);

    return <IonPage>
        <IonHeader translucent>
            <IonToolbar>
                <IonButtons>
                    <IonButton slot="start">
                        <IonIcon slot="icon-only" icon={informationCircleOutline} />
                    </IonButton>
                </IonButtons>
                <IonTitle>{t("Hosts Rating")}</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonSegment onIonChange={changeSegment} value="rating">
                <IonSegmentButton value="rating">
                    <IonLabel>{t("Rating")}</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="">
                    <IonLabel>{t("My Reviews")}</IonLabel>
                </IonSegmentButton>
            </IonSegment>
            {
                ratingLastUpdate ?
                    <IonList>
                        {ratingList.map(({ host_id, host_rating, host_site, host_name }, rating_index) => (
                            <IonItem routerLink={"/host/" + rating_index} key={host_id} lines="full" >
                                <IonNote slot="start" className="host_rating"><h4>{rating_index + 1}</h4></IonNote>
                                <IonLabel>
                                    <h3>{host_name}</h3>
                                    <p>{host_site}</p>
                                </IonLabel>
                                <IonNote slot="end">{host_rating.toFixed(1)}<IonIcon icon={star} style={{
                                    verticalAlign: "text-top",
                                    marginLeft: "5px"
                                }} /></IonNote>
                            </IonItem>
                        ))}
                    </IonList>
                    :
                    null
            }
        </IonContent>
    </IonPage>;
}

RatingPage = React.memo(RatingPage);
RatingPage.displayName = "Rating";

export default RatingPage;