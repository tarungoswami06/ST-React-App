import * as types from '../actionTypes/Login';
import { ApiController, ApiTypes, endPoints } from '../../controller';
import { LoginErrorType, LoginType } from '../../types/LoginTypes';
import { Dispatch } from 'react';
import { GlobalActionType } from '../../types/GlobalTypes';
import { LoginActionType } from '../reducers/Login';
import { RESPONSESTATUS } from '../../helpers/constants';

/**
 * API call to validate login
*/
export const login = (loginData: LoginType) => {
    return async (dispatch: Dispatch<GlobalActionType | LoginActionType | LoginErrorType>): Promise<void> => {
        const paramaters: ApiTypes = {
            method: endPoints.Auth.method,
            endPoint: endPoints.Auth.endpoint,
            params: loginData,
            isLoaderRequired: true,
            token: "",
            dispatch: dispatch,
        };
        dispatch({ type: types.LOGIN_REQUEST });
        const response = await ApiController(paramaters);
        if (response.status === RESPONSESTATUS.SUCCESS) {
            //Success block
            const loginCred = {
                ...loginData,
                loading: false,
                err: "",
                token: response.data.token,
            };
            dispatch({ type: types.LOGIN_SUCCESS, payload: loginCred });
        }
        else {
            // Fail block
            const failMessage = {
                // loading: false,
                err : response.data.error
            }
            dispatch({ type: types.LOGIN_FAIL, payload: failMessage });
        }
    }
};