import showErrorToast from "../common/toast_common"
import {toast} from "react-toastify"
import { RootState } from "@/store/store"
import { useMyPostedJobsQuery } from "@/services/fetchJobService"
import { useSelector } from "react-redux"

import CardSkeleton from "../common/cardSkeleton"
import Jobcard from "../common/Jobcard"
export default function PostedJobs(){
    const {id} = useSelector((store:RootState)=>store.loginState)
    const {data,error,isLoading} = useMyPostedJobsQuery(id)
    console.log(data)
    if(error && 'status' in error){
        showErrorToast(error)
    }

    const defaultJobs = Array(9).fill(1)
    if(isLoading) return <div className="flex flex-row flex-wrap gap-12 p-4 justify-center h-full min-h-screen">
      {defaultJobs?.map((_,index)=>(<CardSkeleton  key={index}/>))}
    </div>
    
  return (
    
    <div className="flex flex-row flex-wrap gap-12 p-4 justify-center h-full min-h-screen">
        {data && data?.status ? data.jobs?.map((item:any)=><Jobcard job={item} key={item._id}/>):
        <h2>No Jobs Posted</h2> }
     
    </div>
  )
}