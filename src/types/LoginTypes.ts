export interface LoginType {
    email: string;
    password: string;
}

export interface ErrorResponseType {
    err: string;
}

export interface LoginErrorType {
    type: string;
    payload: ErrorResponseType;
}
