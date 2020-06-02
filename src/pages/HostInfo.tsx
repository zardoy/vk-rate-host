import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import useServerRequest from '../hooks/useServerRequest';
import { setDetailedHostData } from '../redux/hosts/actions';
import { AppState } from '../redux/types';

interface Props extends RouteComponentProps<{
    rating_index: string
}> { }

const HostInfo: React.FC<Props> = ({ match }) => {
    let dispatch = useDispatch();
    let { t } = useTranslation();
    let makeRequest = useServerRequest();

    let rating_index = +match.params.rating_index;

    //REDUX
    let selHostInfoFromRank = useSelector((state: AppState) => state.hosts.hostsRatingList[rating_index]);
    //todo host_id may be null
    let selHostDetailedData = useSelector((state: AppState) => state.hosts.hostsDetailedData[selHostInfoFromRank.host_id]);

    useEffect(() => {
        let abortController = new AbortController();
        (async () => {
            if (!selHostDetailedData) {
                let result = await makeRequest("host.GetInfo", {
                    host_id: selHostInfoFromRank.host_id,
                    fetchOptions: {
                        signal: abortController.signal
                    }
                });
                if ("error" in result) return;
                dispatch(setDetailedHostData(rating_index, result));
            }
        })();
        return () => {
            abortController.abort();
        }
    }, [makeRequest, rating_index, selHostDetailedData, selHostInfoFromRank.host_id, dispatch]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonBackButton text={t("Back")} defaultHref="/" />
                    </IonButtons>
                    <IonTitle>
                        {selHostInfoFromRank.host_site}
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <p>
                    {selHostDetailedData && selHostDetailedData.host_description}
                </p>
            </IonContent>
        </IonPage>
    )
}

export default HostInfo
