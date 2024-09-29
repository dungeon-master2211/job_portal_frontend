import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import {fetchListedJobsApi} from "../services/fetchJobService"
import sidebarSlice from "./sidebarReducer"
export const store = configureStore({
    reducer:{
        sidebar:sidebarSlice,
        [fetchListedJobsApi.reducerPath]:  fetchListedJobsApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(fetchListedJobsApi.middleware)
    
})

setupListeners(store.dispatch)