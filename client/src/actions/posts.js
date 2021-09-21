import { CREATE, UPDATE, DELETE, FETCH_ONE, CLEAR } from '../constants/actionTypes';
import * as api from '../api/index.js';


export const clearState = () => async (dispatch) => {
  try {
    dispatch({ type: CLEAR });
  }
  catch (error) {
    console.log(error);
  }
}

export const getPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.getPost(id);
    dispatch({ type: FETCH_ONE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const deletePost = (id) => async (dispatch) => {
  try {
    await await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
