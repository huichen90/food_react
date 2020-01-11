import {combineReducers} from "redux";
import loginReducer from './loginReducer';
import businessMessageReducer from './businessMessageReducer';
import foodReducer from './foodReducer';
import orderReducer from './orderReducer';
import commentReducer from './commentReducer';

export const allReducers = combineReducers({
    loginReducer,
    businessMessageReducer,
    foodReducer,
    orderReducer,
    commentReducer,
})


