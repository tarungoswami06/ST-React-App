export const initialState = {
    global: {
        loading: false,
        online: navigator.onLine,
    },
}

// Global Action Types
export interface GlobalActionType {
    type: string;
}

// Global Types
export interface LoaderType {
	loading: boolean;
	online?: boolean;
}

export interface GloablInitialStateType {
    global:LoaderType
}