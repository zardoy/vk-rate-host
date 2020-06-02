import vkBridge, { VKBridgeSubscribeHandler, AppearanceSchemeType } from "@vkontakte/vk-bridge";
import { useEffect } from "react";

const updateAppTheme = (themeScheme: AppearanceSchemeType) => {
    let isDarkTheme = themeScheme === "client_dark" || themeScheme === "space_gray";
    let body = document.body;
    const THEME_DARK = "dark";
    if (isDarkTheme) body.classList.add(THEME_DARK)
    else body.classList.remove(THEME_DARK);
}

const listener: VKBridgeSubscribeHandler = (e) => {
    switch (e.detail.type) {
        case "VKWebAppUpdateConfig":
            updateAppTheme(e.detail.data.scheme);
            break;
        default:
    }
}

export default () => {
    useEffect(() => {
        vkBridge.send("VKWebAppInit");
        vkBridge.subscribe(listener);
        return () => {
            vkBridge.unsubscribe(listener);
        }
    }, []);
}