import { userConstants } from "../constants/user-constant";
import { userService } from "../services/utils.helper";

export const userActions = {
  userLogin,
  userRegistration
};

function userLogin(userData: any) {
  return (dispatch: any) => {
    return dispatch(success(userService.postLoginInfo(userData)));
  };

  function success(userInfo: any) {
    return { type: userConstants.LOGIN_ACTION, userInfo };
  }
}

function userRegistration(userData: any) {
  return (dispatch: any) => {
    return dispatch(success(userService.postRegisterInfo(userData)));
  };

  function success(userInfo: any) {
    return { type: userConstants.REGISTRATION_ACTION, userInfo };
  }
}
