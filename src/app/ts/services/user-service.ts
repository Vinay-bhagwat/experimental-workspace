import { AxiosHandler } from "../util";

async function postLoginInfo(data: any) {
  const response = await AxiosHandler.getRequestCall("people/");
  return response.data
}

async function postRegisterInfo(data: any) {
  const user: any = await AxiosHandler.postRequestCall("register", data);
  return user.data;
}

export const userService = {
  postLoginInfo,
  postRegisterInfo
};
