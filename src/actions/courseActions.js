import * as types from './actionsTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses){
  return { type:types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses(){
  return function(dispach){
    return courseApi.getAllCourses().then(courses => {
      dispach(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}
