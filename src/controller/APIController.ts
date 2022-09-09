import axios from "axios";
import { apiLoadingStart, apiLoadingStop } from "../store/actions/Global";
import { ApiTypes } from "./APITypes";

// Common API controller
export const ApiController = (paramaters: ApiTypes) => {
  const BaseUrl = process.env.REACT_APP_SERVER_HOST;

  if (paramaters.isLoaderRequired) {
    paramaters.dispatch(apiLoadingStart());
  }
  // Header Authentication
  const authHeader = { authorization: `Bearer ${paramaters.token}` };
  //Base URL + endpoint
  const URL = `${BaseUrl}${paramaters.endPoint}`;
  // API Call paramaters
  const axiosParams = {
    method: paramaters.method,
    url: URL,
    headers: authHeader,
    data: paramaters.params,
  };
  // API call with axios
  return axios(axiosParams)
    .then((response) => {
      paramaters.dispatch(apiLoadingStop());
      return response;
    })
    .catch((error) => {
      paramaters.dispatch(apiLoadingStop());
      return error.response;
    });
};
