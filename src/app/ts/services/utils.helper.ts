import { AxiosHandler } from "../util";

async function postLoginInfo(data: any) {
  const response = await AxiosHandler.postRequestCall("login", data);
  console.log(response);
  
  return response.data;
}

async function postRegisterInfo(data: any) {
  const user = await AxiosHandler.postRequestCall("register", data);
  return user.data;
}

export const userService = {
  postLoginInfo,
  postRegisterInfo
};
