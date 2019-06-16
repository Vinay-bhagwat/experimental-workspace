import { combineReducers } from 'redux';
import UserInfoReducer from './user-reducer';


const AllReducers = combineReducers({
    UserInfoReducer:UserInfoReducer
});

export default AllReducers;