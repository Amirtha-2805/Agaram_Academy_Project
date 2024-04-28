import {configureStore} from '@reduxjs/toolkit';
import counterReducer, { signup } from './slices/counter'

// function call with one object argument 

export default configureStore(
    {
        reducer:{
            userSignupLoginDetails:counterReducer,
        }
    }
)