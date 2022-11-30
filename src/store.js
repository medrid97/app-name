import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { productsReducer, newProductReducer, productReducer, productDetailsReducer} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { coachsReducer,newCoachReducer,coachReducer,coachDetailsReducer } from './reducers/coachReducers';
import { coursesReducer,newCourseReducer,courseReducer,courseDetailsReducer } from './reducers/courseReducers';
import {
    authReducer,
    allUsersReducer,
    userReducer,
    userDetailsReducer,
    forgotPassword,
  } from "./reducers/UserReducer";
const reducer = combineReducers ({
    products: productsReducer,
    productDetails: productDetailsReducer,
    newProduct: newProductReducer,
    product: productReducer, 
    cart: cartReducer,  
    coachs: coachsReducer,
    coachDetails :coachDetailsReducer,
    newCoach: newCoachReducer,
    coach: coachReducer,
    courses: coursesReducer,
    courseDetails :courseDetailsReducer,
    newCourse: newCourseReducer,
    course: courseReducer,
    auth: authReducer,
    allUsers: allUsersReducer,
    user: userReducer,
    userDetails: userDetailsReducer,
    forgotPassword: forgotPassword,
  
})


let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingInfo: localStorage.getItem('shippingInfo')
            ? JSON.parse(localStorage.getItem('shippingInfo'))
            : {}
    }
}

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;