import * as types from '../actions/actionsTypes';
import initialState from './initialState';

function actionTypeEndsSuccess(type){
  return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.numAjaxCallsInProgress, action) {
  if(action.type == types.BEGIN_AJAX_CALL){
    return state + 1;
  }else if(actionTypeEndsSuccess(action.type)){
    return state - 1;
  }
  return state;
}

