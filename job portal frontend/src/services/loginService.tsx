import { createApi,fetchBaseQuery  } from "@reduxjs/toolkit/query/react";
import {env} from "../config"
import { userLogin, userRegistration, userRegistrationReturnType,userLoginReturnType } from "../interfaces_types/interfaces";
let backendUrl = env.backendUrl
export const authenticationService = createApi({
    reducerPath:'auth',
    baseQuery:fetchBaseQuery({baseUrl:`${backendUrl}/`}),
    tagTypes:['user'],
    endpoints:(builder)=>({
        registerUser:builder.mutation<userRegistrationReturnType,Partial<userRegistration>>({
            query:(user_info)=>({
                url:'register',
                method:'POST',
                credentials:'include',
                body:user_info
            })
        }),
        loginUser:builder.mutation<userLoginReturnType,Partial<userLogin>>({
            query:(creds)=>({
                url:'login',
                method:"POST",
                credentials:"include",
                body:creds
            }),
            invalidatesTags:['user']
        }),
        logoutUser:builder.mutation<userRegistrationReturnType,void>({
            query:()=>({
                method:"GET",
                url:'logout',
                credentials:"include"
            }),
            invalidatesTags:['user'],
            
        }),
        userSession:builder.query<userRegistrationReturnType,void>({
            query :()=>({
                method:"GET",
                url:"user_session",
                credentials:"include"
            })
        })
    })
})

export const {useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation,useUserSessionQuery} = authenticationService

