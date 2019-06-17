import { userConstants } from "../constants/user-constant";

export interface IUserInfo {
  userName: string;
  isLoggedIn: boolean;
}
let initialState: IUserInfo = {
  userName: "",
  isLoggedIn: false
};

const UserInfoReducer = (state = initialState, action: any) => {
  const { type, userData } = action;
  switch (type) {
    case userConstants.LOGIN_ACTION:
      return userData;
      break;
    case userConstants.REGISTRATION_ACTION:
      return userData;
      break;
    case "TEST_ACTION":
      return {};
    default:
      return state;
  }
};

export default UserInfoReducer;
