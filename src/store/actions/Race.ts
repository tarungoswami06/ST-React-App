import * as types from '../actionTypes/Race';
import { ApiController, ApiTypes, endPoints } from '../../controller';
import { LoginResponseType } from '../reducers/Login';
import { HorseDetailTypes, HorseStatusActionType, raceActionCreator, RaceResultType } from '../../types/RaceTypes';
import { RACE_EVENT_TYPE, RESPONSESTATUS } from '../../helpers/constants';
import { updateRaceStatus } from '../../helpers';
import { login } from '../actions/Login';
import { LoginType } from '../../types/LoginTypes';
import { Dispatch } from 'react';

// API call to get race data
export const raceStatus = (): raceActionCreator => async (dispatch, getState) => {
    const state = getState();
    if (state.login.data) {
        const { token, email, password }: LoginResponseType = state.login.data;
        const raceStatusData = state.race.data;
        const response = await fetchResult(token, dispatch);
        if (response.status === RESPONSESTATUS.NOCONTENT) {
            // Request timed out while waiting for new events
            dispatch(raceStatus());
        } else if (response.status === RESPONSESTATUS.UNAUTHORIZED) {
            // Authentication token is missing, or does not match an active session
            handleAuthentication(email, password, dispatch);
        } else if (response.status === RESPONSESTATUS.SUCCESS && !response.data.error) {
            // Success block
            handleSuccess(raceStatusData, response.data, dispatch);
        }
    }
};

// API call
export const fetchResult = async (token: string, dispatch: Dispatch<void>) => {
    const paramaters: ApiTypes = {
        method: endPoints.Results.method,
        endPoint: endPoints.Results.endpoint,
        params: '',
        isLoaderRequired: false,
        token: token,
        dispatch: dispatch,
    };
    const response = await ApiController(paramaters);
    return response;
}

// Update race detail in store
const updateHorseResult = (data: HorseDetailTypes[]) => ({
    type: types.RACE_SUCCESS,
    payload: data,
});

// Success callback Function
const handleSuccess = (raceStatusData: HorseDetailTypes[], successResponse: RaceResultType,  dispatch: Dispatch<HorseStatusActionType|raceActionCreator>) => {

    //Request successfull
    const raceCompleted = raceStatusData.some((item: HorseDetailTypes) => item.eventType !== RACE_EVENT_TYPE.START);
    const nextRace = successResponse.event === RACE_EVENT_TYPE.START && raceCompleted;
    if (nextRace) {
        // clear the previous race status data
        dispatch(updateHorseResult([]));
    }
    // get sorted list of statuses
    const updatedStatusList = updateRaceStatus(nextRace ? [] : raceStatusData, successResponse);
    dispatch(updateHorseResult(updatedStatusList));
    dispatch(raceStatus());
};

// Authentication function 
const handleAuthentication = async (email: string, password: string, dispatch: any) => {
    const loginCred: LoginType = {
        email,
        password,
    };
    await dispatch(login(loginCred));
};