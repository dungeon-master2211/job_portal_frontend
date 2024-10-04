import { createSlice } from "@reduxjs/toolkit";


const initialState={
    isLoggedIn:false,
    id:'',
    name:'',
    role:''
}

export const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        loggedIn:(state,action)=>{
            let currentPayload = action.payload
            state.isLoggedIn=true
            state.id = currentPayload.id
            state.name = currentPayload.name,
            state.role = currentPayload.role
        },
        loggedOut:(state)=>{
            state.isLoggedIn=false
            state.id=''
            state.name=''
            state.role=''
        }
    }
})

export const {loggedIn,loggedOut} = loginSlice.actions

export default loginSlice.reducer