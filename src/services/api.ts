import axios, {AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
import { toast } from 'react-toastify';
import { getToken } from './token';
import { StatusCodes } from 'http-status-codes';

type DetailMessageType = {
    type: string;
    message: string;
  }

const StatusCodeMapping: StatusCodes[] = [StatusCodes.BAD_REQUEST, StatusCodes.UNAUTHORIZED, StatusCodes.NOT_FOUND];

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = (error.response.data);

        toast.warn(detailMessage.message);
      }

      throw error;
    }
  );

  return api;
};
