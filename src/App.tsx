import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactHashRouter } from '@ionic/react-router';
import React, { Suspense, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import GlobalModals from './components/GlobalModals';
import useServerRequest from './hooks/useServerRequest';
import useVkInit from "./hooks/useVkInit";
import AppLoadingPage from './pages/AppLoading';
import HostInfoPage from './pages/HostInfo';
import RatingPage from "./pages/Rating";
import ReloadAppPage from "./pages/ReloadApp";
import { setUserType } from './redux/user/actions';

const App: React.FC = () => {
    useVkInit();

    let dispatch = useDispatch();
    let makeRequest = useServerRequest();


    let loadApp = useCallback((async () => {
        let response = await makeRequest("app.init", {});
        if ("error" in response) return;
        dispatch(setUserType(response.user_type));
    }), [dispatch, makeRequest]);

    useEffect(() => {
        loadApp();
    }, [loadApp]);

    return <IonApp>
        <Suspense fallback={<AppLoadingPage />}>
            <GlobalModals />
            <IonReactHashRouter>
                <IonRouterOutlet>
                    <Route path="/rating" component={RatingPage} exact />
                    <Route path="/host/:rating_index" component={HostInfoPage} exact />
                    <Route path="/reloadapp" render={() => <ReloadAppPage callback={loadApp} />} exact />
                    <Redirect from="/" to="/rating" />
                </IonRouterOutlet>
            </IonReactHashRouter>
        </Suspense>
    </IonApp>;
};

export default App;
