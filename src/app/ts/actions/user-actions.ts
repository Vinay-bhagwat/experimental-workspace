import { userConstants } from "../constants/user-constant";
import { userService } from "../services/user-service";
import { IUserInfo } from "../reducers/user-reducer";
import history from "../history";
import { helperConstants } from "../constants/helper-constant";

export const userActions = {
  userLogin,
  userRegistration
};

function userLogin(userData: any) {
  return (dispatch: any) => {
    dispatch(
      loading({
        isErrorOccured: false,
        isLoading: true
      })
    );

    userService
      .postLoginInfo(userData)
      .then(response => {
        console.log(
          response.results.find((o: any) => o.name === userData.email)
          // response.results
        );

        if (
          response.results.find(
            (o: any) =>
              o.name === userData.email && o.birth_year === userData.password
          )
        ) {
          return dispatch(
            success({
              isLoggedIn: true,
              userName: userData.email,
              token: response.data
            })
          );
        }
        return dispatch(
          failure({
            isErrorOccured: true,
            isLoading: false
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

  function failure(error: any) {
    return { type: helperConstants.ERROR_ACTION, helperInfo: error };
  }

  function loading(helperInfo: any) {
    return {
      type: helperConstants.PAGE_LOADING_ACTION,
      helperInfo: helperInfo
    };
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
