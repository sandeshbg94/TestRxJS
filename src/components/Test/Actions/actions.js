import axios from 'axios';
import { INCREMENT, DECREASE, FETCH_USER_FAILED, FETCH_USER_SUCCESS, FETCH_USER, FETCH_GIT_USER, FETCH_GIT_USER_SUCCESS,
          UPLOAD_GIT_USER, UPLOAD_FAILED, UPLOAD_SUCCESS } from "./actionTypes";

export function incrementAction() {
  return {
    type: INCREMENT,
  };
}
export function decreaseAction() {
  return {
    type: DECREASE,
  };
}

export function getData() {
  console.log('asdf')
  return {
    type: FETCH_USER
  };
}

export function getGitData() {
  return {
    type : FETCH_GIT_USER
  };
}

export const getGitDataSuccess = (data) => {
  return {
    type : FETCH_GIT_USER_SUCCESS,
    data: data
  }
}

export const getDataSuccess = (data) => {
  return {
      type: FETCH_USER_SUCCESS,
      data: data
  }
}

export const getUserFailed = () => ({
  type: FETCH_USER_FAILED
});

export function getUsers() {
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response =>
        dispatch(getDataSuccess(response.data))
      ).catch(error => dispatch({ type: FETCH_USER_FAILED, payload: error }));
  };
}

export const addGitUser = (data) => {
  return {
    type : UPLOAD_GIT_USER,
    data : data
  }
}

export const addedGitUser = (data) => {
  return {
    type : UPLOAD_SUCCESS,
    data : data.response
  }
}

export const uploadFailed = () => {
  return {
    type : UPLOAD_FAILED,
    msg : "Could not add the git user"
  }
}