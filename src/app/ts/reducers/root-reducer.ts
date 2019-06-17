import { combineReducers } from "redux";
import UserInfoReducer from "./user-reducer";
import HelperInfoReducer from "./helper-reducer";
import SearchInfoReducer from "./search-reducer";

const AllReducers = combineReducers({
  UserInfoReducer: UserInfoReducer,
  HelperInfoReducer: HelperInfoReducer,
  SearchInfoReducer: SearchInfoReducer
});

export default AllReducers;
