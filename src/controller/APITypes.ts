import { Method } from "axios";

// API types
export interface ApiTypes {
  endPoint: string;
  params: Object;
  method: Method;
  isLoaderRequired: boolean;
  token: string;
  dispatch: any;
}