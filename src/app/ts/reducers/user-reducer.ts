import { userConstants } from "../constants/user-constant";

export interface IUserInfo {
  userName: string;
  isLoggedIn: boolean;
  token?: string;
}
let initialState: IUserInfo = {
  userName: "",
  isLoggedIn: false
};

const UserInfoReducer = (state = initialState, action: any) => {
  const { type, userInfo } = action;
  switch (type) {
    case userConstants.LOGIN_ACTION:
      return userInfo;
    case userConstants.REGISTRATION_ACTION:
      return userInfo;
    case "TEST_ACTION":
      return {};
    default:
      return state;
  }
};

export default UserInfoReducer;
