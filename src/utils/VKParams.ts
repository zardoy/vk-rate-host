type KNOWN_VK_PARAMS = "user_id" | "app_id" | "is_app_user" | "are_notifications_enabled" | "language" |
    "ref" | "access_token_settings" | "group_id" | "viewer_group_role" | "platform" | "is_favorite";

export const getVKParam = (param: KNOWN_VK_PARAMS) => {
    let vk_param = "vk_" + param;
    return new URL(window.location.toString()).searchParams.get(vk_param);
}

export default {
    get vkIsDesktopVersion() {
        return getVKParam("platform") === "desktop_web";
    },
    get VKLanguage() {
        return getVKParam("language") || window.navigator.language || "en";
    }
}