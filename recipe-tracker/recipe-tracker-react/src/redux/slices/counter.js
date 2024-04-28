import { createSlice } from '@reduxjs/toolkit';
export const counterSlice=createSlice({
    name:"userSignupLoginDetails",
    //default value like useState("")
    initialState:{
       usersignup:{
            name:"",
            email:"",
            password:"",
            age:"",
            gender:"",
            phone:""
        },
        userlogin:{
            email:"",
            password:""
        }
    },
    //functions to change state value
    reducers:{
        signup:(state,action)=>{
            state.usersignup=action.payload
        },
        uLogin:(state,action)=>{
            state.userlogin=action.payload
        }
        
       
    }
})
export const { signup,uLogin } = counterSlice.actions

export default counterSlice.reducer