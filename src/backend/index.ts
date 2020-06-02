import { MethodName } from "./types";

export class ServerError extends Error {
    constructor(public message: string, public error_code: number, public method_name: MethodName) {
        super(message);
    }
}