import {User} from '../../constants/action';
import { httpRequest, findApiConfigByName } from '../../utils/request';
export const createUser = (payload, cb) => {
    return (dispatch) => {
        httpRequest("https://semicolon-react-riot.herokuapp.com/addUser", {method: 'POST'}, { data: payload })
        .then((data) => {
          dispatch({ type: User.AddUser.Success, data: data });
          cb();
        })
        .catch(error => {
          console.log("Error Response data", error)
          dispatch({ type: User.AddUser.Failure, error: error });
        })
    }
}