
import axios, { AxiosInstance } from "axios";

const instance:AxiosInstance = axios.create({
  baseURL: "https://swapi.co/api/",
  timeout: 10000,
  headers: { "content-type": "application/json"  }
});

const GET_REQUEST_CALL = async (url: string) => {
  try {
    const response = await instance({ method: "get", url: url });
    return response;
  }
  catch (error) {
    return error;
  }
};

async function POST_REQUEST_CALL(url: string, data: any) {
  return await instance({
    method: "post",
    url: url,
    data: data
  });
}

export const AxiosHandler = {
  postRequestCall: POST_REQUEST_CALL,
  getRequestCall: GET_REQUEST_CALL
};
