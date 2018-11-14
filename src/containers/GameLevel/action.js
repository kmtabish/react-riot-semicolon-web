import { httpRequest, findApiConfigByName } from '../../utils/request';
import {Quiz} from '../../constants/action';

export const updateGameLevel = (callback) => {
    return (dispatch) => {
      // const topupApiConfig = findApiConfigByName("test");
      httpRequest("https://semicolon-react-riot.herokuapp.com/quiz", {method: 'GET'})
        .then((data) => {
          dispatch({ type: Quiz.Get.Success, data: data });
          if (callback) {
            callback();
          }
          console.log("Success Response data", data)
        //   dispatch({ type: UiActions.Loader.Hide });
        })
        .catch(error => {
          console.log("Error Response data", error)
          dispatch({ type: Quiz.Get.Failure, error: error });
          // dispatch({ type: UiActions.ApiError.Show });
        })
    }
  }; 
