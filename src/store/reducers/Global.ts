import { GlobalActionType, initialState } from '../../types/GlobalTypes';
import * as actionTypes from '../actionTypes/Global';

export default function global(state = initialState.global, action: GlobalActionType) {
    switch (action.type) {
        // Loader reducer
        case actionTypes.API_LOADING_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.API_LOADING_STOP:
            return {
                ...state,
                loading: false
            };
        // Connection reducer
        case actionTypes.CONNECTION_ONLINE:
            return {
                ...state,
                online: true
            };
        case actionTypes.CONNECTION_OFFLINE:
            return {
                ...state,
                online: false
            };
        default:
            return state;
    }
}