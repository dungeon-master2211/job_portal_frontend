import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "../config";
import { userRegistrationReturnType,postJobType, applyToJobRequestType, myPostedJobsReturnType, viewApplicantsReturnType, changeApplicantStatusArg, myAppliedJobReturnType } from "@/interfaces_types/interfaces";

const BACKEND_URL = env.backendUrl

export const fetchListedJobsApi = createApi({
    reducerPath:'fetchListedJobs',
    baseQuery:fetchBaseQuery({baseUrl:`${BACKEND_URL}/`}),
    tagTypes:['jobs'],
    endpoints:(builder)=>({
        getListedJobs : builder.mutation<any,object>({
            query:(jobQuery)=>({
                method:'GET',
                url:'jobs?'+new URLSearchParams({...jobQuery}).toString(),

            }),
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
        }),
        viewApplicants:builder.query<viewApplicantsReturnType,string>({
            query:(id:string)=>({
                method:'GET',
                url:`view_applicants/${id}`,
                credentials:'include'
            })
        }),
        changeApplicantStatus:builder.mutation<userRegistrationReturnType,changeApplicantStatusArg>({
            query:(queries)=>{
                const finalQuery = {...queries}
                return {
                method:"GET",
                url:'change_status?'+new URLSearchParams({...finalQuery}).toString(),
                credentials:"include"
            }},
            invalidatesTags:['jobs']
        }),
        viewMyAppliedJobs:builder.mutation<myAppliedJobReturnType,string>({
            query:(queryString)=>({
                method:"GET",
                credentials:"include",
                url:"my_applied_job?companyName="+queryString
            })
        })



        })
})

export const {useGetListedJobsMutation,usePostJobMutation,useApplyToJobMutation,useMyPostedJobsQuery,
    useViewApplicantsQuery, useChangeApplicantStatusMutation,useViewMyAppliedJobsMutation
} = fetchListedJobsApi