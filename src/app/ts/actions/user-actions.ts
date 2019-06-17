import { userConstants } from "../constants/user-constant";
import { userService } from "../services/user-service";

export const userActions = {
  userLogin,
  userRegistration
};

function userLogin(userData: any) {
  return (dispatch: any) => {
    userService.postLoginInfo(userData).then(response => {
      return dispatch(success(response));
    });
  };

  function success(userInfo: any) {
    return { type: userConstants.LOGIN_ACTION, userInfo };
  }
}

function userRegistration(userData: any) {
  return (dispatch: any) => {
    userService.postLoginInfo(userData).then(response => {
      return dispatch(success(response));
    });
  };

  function success(userInfo: any) {
    return { type: userConstants.REGISTRATION_ACTION, userInfo };
  }
}
