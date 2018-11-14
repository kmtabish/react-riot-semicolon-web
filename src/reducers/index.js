import { combineReducers } from "redux";
import basicReducer from './basicReducer';
import userReducer from './userReducer';
import quizReducer from './quizReducer';
import { routerReducer } from 'react-router-redux';
// export const reducers = combineReducers({
//   text: basicReducer,
//   routing: routerReducer
// });

export default {
  text: basicReducer,
  user: userReducer,
  quiz: quizReducer
};