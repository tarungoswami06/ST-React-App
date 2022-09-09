import { LoginDataType } from "../store/reducers/Login";
import { RaceResponseType } from "../store/reducers/Race";
import { LoaderType } from "./GlobalTypes";

// Initial State Type
export interface CommonInitialStateType {
	login: LoginDataType;
	race: RaceResponseType;
	global: LoaderType;
}