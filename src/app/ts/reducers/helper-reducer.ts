import { helperConstants } from "../constants/helper-constant";

export interface IHelper {
  isErrorOccured: boolean;
  isLoading: boolean;
}
let initialState: IHelper = {
  isErrorOccured: false,
  isLoading: false
};

const HelperInfoReducer = (state = initialState, action: any) => {
  const { type, helperInfo } = action;
  switch (type) {
    case helperConstants.ERROR_ACTION:
      return helperInfo;
    case helperConstants.PAGE_LOADING_ACTION:
      return helperInfo;
    default:
      return state;
  }
};

export default HelperInfoReducer;
