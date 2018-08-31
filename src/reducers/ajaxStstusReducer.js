import initialState from "./initialState";
import * as types from "../actions/actionTypes";

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length -8) == '_SUCCESS';
}


// ***REMINDER***:  New reducers need to be added to the root reducer!
export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
  if (action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }
  return state;
}
