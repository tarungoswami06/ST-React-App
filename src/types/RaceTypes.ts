import { ThunkAction } from "redux-thunk";
import { RaceResponseType } from "../store/reducers/Race";
import { CommonInitialStateType } from "./CommonTypes";

export interface HorseDetailTypes {
  id: number;
  name: string;
  time: number;
  eventType: string;
}

// Race Types
export interface RaceResultType {
  event: string;
  horse: HorseType;
  time: number;
}

// Response
export interface ResponseType {
  data: RaceResponseType,
  status: number,
}

export interface HorseType {
  id: number;
  name: string;
}

// Race Action Types
export interface HorseStatusActionType {
  type: string;
  payload: HorseType[];
}

export type raceActionCreator = ThunkAction<
  void,
  CommonInitialStateType,
  {},
  HorseStatusActionType
>;