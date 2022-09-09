import { Method } from "axios";
import { APIENDPOINT } from "../helpers/constants";

// Methods
const methods = {
    GET: "get" as Method,
    POST: "post" as Method
}

// Headers
const headers = {
    "Content-Type": "application/json",
};

// Define endpoint, menthod and header
export const endPoints = {
    Auth: { endpoint: APIENDPOINT.AUTH, method: methods.POST, header: headers },
    Results: { endpoint: APIENDPOINT.RESULT, method: methods.GET, header: headers },
};
