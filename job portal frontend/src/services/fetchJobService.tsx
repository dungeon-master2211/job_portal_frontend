import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "../config";
import { userRegistrationReturnType,postJobType, applyToJobRequestType, myPostedJobsReturnType } from "@/interfaces_types/interfaces";

const BACKEND_URL = env.backendUrl

export const fetchListedJobsApi = createApi({
    reducerPath:'fetchListedJobs',
    baseQuery:fetchBaseQuery({baseUrl:`${BACKEND_URL}/`}),
    tagTypes:['jobs'],
    endpoints:(builder)=>({
        getListedJobs : builder.query<any,void>({
            query:()=>`jobs`,
        }),
        postJob:builder.mutation<userRegistrationReturnType,Partial<postJobType>>({
            query:(job_detail)=>({
                method:"POST",
                url:"post_job",
                credentials:"include",
                body:job_detail
            }),
            invalidatesTags:['jobs']
        }),
        applyToJob:builder.mutation<userRegistrationReturnType,FormData>(
            {
                query:(jobApplyingDetail)=>({
                    method:"POST",
                    credentials:"include",
                    url:"apply_to_job",
                    body:jobApplyingDetail
                }),
                invalidatesTags:['jobs']
        }
        ),
        myPostedJobs:builder.query<myPostedJobsReturnType,string>({
            query:(id:string)=>({
                method:'GET',
                url:`my_jobs/${id}`,
                credentials:"include"
            })
        })
        })
       
})

export const {useGetListedJobsQuery,usePostJobMutation,useApplyToJobMutation,useMyPostedJobsQuery} = fetchListedJobsApi