import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import {fetchListedJobsApi} from "../services/fetchJobService"
import { authenticationService } from '../services/loginService'
import sidebarSlice from "./sidebarReducer"
import loginState from './loginState'
export const store = configureStore({
    reducer:{
        sidebar:sidebarSlice,
        loginState:loginState,
        [fetchListedJobsApi.reducerPath]:  fetchListedJobsApi.reducer,
        [authenticationService.reducerPath]:authenticationService.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([
        fetchListedJobsApi.middleware,
        authenticationService.middleware])
    
})

setupListeners(store.dispatch)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>()