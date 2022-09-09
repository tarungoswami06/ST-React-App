import * as types from '../actionTypes/Race';
import { HorseDetailTypes, HorseStatusActionType } from "../../types/RaceTypes";

// Initial state
const initialState = {
  race: {
    data: [],
  }
}

// Initial state Type
export interface RaceInitialStateType {
  race: RaceResponseType;
}

export interface RaceResponseType {
  data: HorseDetailTypes[];
}

// Race Reducer
const raceReducer = (state = initialState.race, action: HorseStatusActionType) => {
  switch (action.type) {
    case types.RACE_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default raceReducer;