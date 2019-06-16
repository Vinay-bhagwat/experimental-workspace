import { userConstants } from "../constants/user-constant";

let user = localStorage.getItem("user");
const initialState = {
  user: { login: "", avatar_url: "" }
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
