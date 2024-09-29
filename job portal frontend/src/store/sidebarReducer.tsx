import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    open:false
}
export const sidebarSlice = createSlice({
    name:'sidebar',
    initialState,
    reducers:{
        toogleSidebar:(state)=>{
            state.open = !state.open
        }
    }
})

export const {toogleSidebar} = sidebarSlice.actions
export default sidebarSlice.reducer