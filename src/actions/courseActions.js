import axios from "axios";

import {
  ALL_COURSES_REQUEST,
  ALL_COURSES_SUCCESS,
  ALL_COURSES_FAIL,
  NEW_COURSE_REQUEST,
  NEW_COURSE_SUCCESS,
  NEW_COURSE_FAIL,
  DELETE_COURSE_REQUEST,
  DELETE_COURSE_SUCCESS,
  DELETE_COURSE_FAIL,
  UPDATE_COURSE_REQUEST,
  UPDATE_COURSE_SUCCESS,
  UPDATE_COURSE_FAIL,
  COURSE_DETAILS_REQUEST,
  COURSE_DETAILS_SUCCESS,
  COURSE_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/courseConstants";
export const newCourse = (courseData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_COURSE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `http://localhost:5000/api/v3/course/new`, { withCredentials: true }
      ,courseData,
      config
    ); 

    dispatch({
      type: NEW_COURSE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_COURSE_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const deleteCourse = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_COURSE_REQUEST });

    const { data } = await axios.delete(
      `http://localhost:5000/api/v3/course/${id}`,  { withCredentials: true }
    );

    dispatch({
      type: DELETE_COURSE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_COURSE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Product (ADMIN)
export const updateCourse = (id, courseData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_COURSE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `http://localhost:5000/api/v3/course/${id}`,
      courseData,
      config ,  { withCredentials: true }
    );

    dispatch({
      type: UPDATE_COURSE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_COURSE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getCourseDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: COURSE_DETAILS_REQUEST });

    const { data } = await axios.get(
      `http://localhost:5000/api/v3/course/${id}`
    );

    dispatch({
      type: COURSE_DETAILS_SUCCESS,
      payload: data.course,
    });
  } catch (error) {
    dispatch({
      type: COURSE_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getCourses = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_COURSES_REQUEST });

    const { data } = await axios.get(`http://localhost:5000/api/v3/courses`);

    dispatch({
      type: ALL_COURSES_SUCCESS,
      payload: data.courses,
    });
  } catch (error) {
    dispatch({
      type: ALL_COURSES_FAIL,
      payload: error.response.data.message,
    });
  }
};
