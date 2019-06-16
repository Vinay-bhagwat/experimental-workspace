const axios = require("axios");

const instance = axios.create({
  baseURL: "https://reqres.in/api/",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" }
});

const GET_REQUEST_CALL = (url: string, data: any) => {
  return instance({ method: "get", url: url })
    .then(function(response: any) {
      return response;
    })
    .catch(function(error: any) {
      return error;
    });
};

const POST_REQUEST_CALL = (url: string, data: any) => {
  return instance({
    method: "post",
    url: url,
    data: data
  })
    .then(function(response: any) {
      return response;
    })
    .catch(function(error: any) {
      return error;
    });
};

export const AxiosHandler = {
  postRequestCall: POST_REQUEST_CALL,
  getRequestCall: GET_REQUEST_CALL
};
