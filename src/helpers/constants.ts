export const RACE_EVENT_TYPE = {
    START: "start",
    FINISH: "finish",
};

export const HORSE_DATA = {
    NO: "No",
    HORSE: "Horse",
    TIME: "Time",
};

export const NotificationState: NotificationTypes = {
    SUCCESS: "success",
    INFO: "info",
    WARNING: "warning",
    ERROR: "error"
}

export interface NotificationTypes {
    SUCCESS: string,
    INFO: string,
    WARNING: string,
    ERROR: string
}

export const formatTime = (time: number | null): string | 0 | null => {
    const formattedTime = time && `${(time / 1000).toFixed(1)}`.split(".").join(",");
    return formattedTime && `${formattedTime}s`;
};

export const RACE_EVENT_MSG = {
    COMPLETE: "The Race Data has been fetched successfully....",
    PENDING: "Please wait..., Race data is fetching ..."
}

export const SUBMIT = "Submit"

export const RACE_LOGINFORMMSGS = {
    EMAIL: "Please enter your email",
    PASSWORD: "Please enter your password!"
}

export const ROUTESNAME = {
    LOGIN : {
        NAME: "Race Login", PATH: "/login"
    },
    RACE: {
        NAME: "Race details", PATH: "/race"
    }
}

export const RACE_LOGINFORMLABEL = {
    EMAIL: "Email Id",
    PASSWORD: "Password"
}

export const RACE_LOGINFORMNAME = {
    EMAIL: "email",
    PASSWORD: "password"
}

export const APIENDPOINT = {
    AUTH: "/auth",
    RESULT: "/results"
}

export const RESPONSESTATUS = {
    NOCONTENT: 204,
    SUCCESS: 200,
    UNAUTHORIZED: 401
}

export const PAGENOTFOUNDMSG = "Page Not Found!!!"

export const BACKTOLOGIN = "Back to Login"