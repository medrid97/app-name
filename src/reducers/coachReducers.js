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
    NEW_COACH_RESET,
    DELETE_COACH_RESET ,
    UPDATE_COACH_RESET ,

    CLEAR_ERRORS

} from '../constants/coachConstants'

export const coachsReducer = (state = { coachs: [] }, action) => {
    switch (action.type) {
        case ALL_COACHS_REQUEST:
       
            return {
                loading: true,
                coachs: []
            }

       

        case ALL_COACHS_SUCCESS : 
        return {
            loading: false,
            coachs: action.payload
        }

    case ALL_COACHS_FAIL:
   
        return {
            loading: false,
            error: action.payload
        }

    case CLEAR_ERRORS:
        return {
            ...state,
            error: null
        }

    default:
        return state;
}
}

export const newCoachReducer = (state = { coach: {} }, action) => {
    switch (action.type) {

        case NEW_COACH_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_COACH_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                coach: action.payload.product
            }

        case NEW_COACH_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_COACH_RESET:
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const coachReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_COACH_REQUEST:
        case UPDATE_COACH_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_COACH_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_COACH_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_COACH_FAIL:
        case UPDATE_COACH_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_COACH_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_COACH_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const coachDetailsReducer = (state = { coach: {} }, action) => {
    switch (action.type) {

        case COACH_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case COACH_DETAILS_SUCCESS:
            return {
                loading: false,
                coach: action.payload
            }

        case COACH_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}
