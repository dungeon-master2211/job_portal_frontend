import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "../config";

const BACKEND_URL = env.backendUrl

export const fetchListedJobsApi = createApi({
    reducerPath:'fetchListedJobs',
    baseQuery:fetchBaseQuery({baseUrl:`${BACKEND_URL}/`}),
    endpoints:(builder)=>({
        getListedJobs : builder.query<any,void>({
            query:()=>`jobs`,
        })
    })
})

export const {useGetListedJobsQuery} = fetchListedJobsApi