import { userConstants } from "../constants/user-constant";
import { userService } from "../services/user-service";
import { IUserInfo } from "../reducers/user-reducer";
import history from "../history";
export const userActions = {
  userLogin,
  userRegistration
};

function userLogin(userData: any) {
  return (dispatch: any) => {
    userService
      .postLoginInfo(userData)
      .then(response => {
        return dispatch(
          success({
            isLoggedIn: true,
            userName: userData.email,
            token: response.data
          })
        );
      })
      .then(item => {
        console.log(item);

        history.push("/welcome");
      });
  };

  function success(userInfo: IUserInfo) {
    return { type: userConstants.LOGIN_ACTION, userInfo: userInfo };
  }
}

function userRegistration(userData: any) {
  return (dispatch: any) => {
    userService.postLoginInfo(userData).then(response => {
      return dispatch(success(response));
    });
  };

  function success(userInfo: IUserInfo) {
    return { type: userConstants.REGISTRATION_ACTION, userInfo: userInfo };
  }
}
