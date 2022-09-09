import { GlobalActionType } from "../../types/GlobalTypes";
import * as actionTypes from "../actionTypes/Global";

//Loading Action
export const apiLoadingStart = () : GlobalActionType => ({ type: actionTypes.API_LOADING_START });
export const apiLoadingStop = () : GlobalActionType => ({ type: actionTypes.API_LOADING_STOP });

//Connection Action
export const connectionOnline = () : GlobalActionType => ({ type: actionTypes.CONNECTION_ONLINE });
export const connectionOffline = () : GlobalActionType => ({ type: actionTypes.CONNECTION_OFFLINE });
