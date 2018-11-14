import {Quiz} from '../constants/action';
import _cloneDeep from 'lodash/cloneDeep';
const defaultObj = {
    quiz: {}
};

const quizReducer = (state = defaultObj, action) => {
    let duplicateState = _cloneDeep(state);
    switch(action.type) {
     case Quiz.Get.Success: 
     duplicateState.quiz = action.data
          break;
     case Quiz.Get.Failure: 
     duplicateState.quiz = {}
          break;
     default: 
          break;
    }
    return duplicateState;
   }
   export default quizReducer;