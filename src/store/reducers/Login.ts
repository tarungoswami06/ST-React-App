import * as types from '../actionTypes/Login';

// Initial state
const initialState = {
  login: {
    data: null,
  }
}

// Login response types
export interface LoginResponseType {
  token: string;
  email: string;
  password: string;
  err: string
}

export interface LoginDataType {
  data: null | LoginResponseType;
}

// Login action types
export interface LoginActionType {
  type: string;
  payload: LoginResponseType;
}

// Initial State Type
export interface InitialStateType {
  login: LoginDataType;
}

const loginReducer = (state = initialState.login, action: LoginActionType): LoginDataType => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        data: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default loginReducer;