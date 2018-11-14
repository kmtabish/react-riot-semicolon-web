import {User} from '../constants/action';
const defaultObj = {
    user: {}
};

const basicReducer = (state = defaultObj, action) => {
    switch(action.type) {
     case User.AddUser.Success: 
          defaultObj.user = action.data
          localStorage.setItem("token", action.data.token)
          break;
     case User.AddUser.Failure: 
          defaultObj.user = {}
          break;
     default: 
          break;
    }
    return defaultObj;
   }
   export default basicReducer;