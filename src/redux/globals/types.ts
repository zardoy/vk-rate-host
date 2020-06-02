//переделать. все.
export interface GlobalsState {
    preloaders: number,
    activeDialog: null | {
        type: "message",
        title?: string,
        message: string,
        handler?: () => any
    } | {
        type: "destruction",
        title: string,
        message: string,
        confirmText: string,
        confirmHandler: () => any
    }
}