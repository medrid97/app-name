import axios from 'axios';

import {
     ALL_COACHS_REQUEST,
     ALL_COACHS_SUCCESS,
     ALL_COACHS_FAIL,
    
   NEW_COACH_REQUEST,
    NEW_COACH_SUCCESS,
   NEW_COACH_FAIL,
     DELETE_COACH_REQUEST,
    DELETE_COACH_SUCCESS,
     DELETE_COACH_FAIL,
     UPDATE_COACH_REQUEST,
   UPDATE_COACH_SUCCESS,
   UPDATE_COACH_FAIL,
   COACH_DETAILS_REQUEST,
     COACH_DETAILS_SUCCESS,
   COACH_DETAILS_FAIL,
   
    CLEAR_ERRORS

 } from '../constants/coachConstants'
export const newCoach = (coachData) => async (dispatch) => {
     try {

         dispatch({ type: NEW_COACH_REQUEST })

    const config = {
             headers: {
                'Content-Type': 'application/json'
             }
         }
         const { data } = await axios.post(`http://localhost:5000/api/v2/coach/new`, coachData, config) // bch nbdedlou lien berk

         dispatch({
             type: NEW_COACH_SUCCESS,             payload: data
         })

     } catch (error) {
         dispatch({
            type: NEW_COACH_FAIL,
             payload: error.response.data.message
         })
     }
 }
export const deleteCoach = (id) => async (dispatch) => {
     try {

        dispatch({ type: DELETE_COACH_REQUEST })

         const { data } = await axios.delete(`http://localhost:5000/api/v2/coach/${id}`)

         dispatch({
             type: DELETE_COACH_SUCCESS,
           payload: data.success
         })

     } catch (error) {
         dispatch({
             type: DELETE_COACH_FAIL,
             payload: error.response.data.message
         })
     }
 }

 // Update Product (ADMIN)
 export const updateCoach = (id, coachData) => async (dispatch) => {
     try {

         dispatch({ type: UPDATE_COACH_REQUEST })

         const config = {
             headers: {
                 'Content-Type': 'application/json'
             }
         }

        const { data } = await axios.put(`http://localhost:5000/api/v2/coach/${id}`, coachData, config)

         dispatch({
             type: UPDATE_COACH_SUCCESS,
             payload: data.success
         })

     } catch (error) {
         dispatch({
             type: UPDATE_COACH_FAIL,
             payload: error.response.data.message
         })
     }
 }

 export const getCoachDetails = (id) => async (dispatch) => {
     try {

         dispatch({ type: COACH_DETAILS_REQUEST })

         const { data } = await axios.get(`http://localhost:5000/api/v2/coach/${id}`)

         dispatch({
             type: COACH_DETAILS_SUCCESS,
             payload: data.coach
         })

     } catch (error) {
         dispatch({
             type: COACH_DETAILS_FAIL,
             payload: error.response.data.message
         })
     }
 }

 export const getCoachs = () => async (dispatch) => {
     try {

         dispatch({ type: ALL_COACHS_REQUEST })

         const { data } = await axios.get(`http://localhost:5000/api/v2/coachs`)

         dispatch({
             type: ALL_COACHS_SUCCESS,
             payload: data.coachs
         })

     } catch (error) {

         dispatch({
             type: ALL_COACHS_FAIL,
             payload: error.response.data.message
         })
     }
 }