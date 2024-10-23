import { useViewApplicantsQuery } from "@/services/fetchJobService"
import { useParams } from "react-router-dom"
import CardSkeleton from "../common/cardSkeleton"
import ApplicantsCard from "./ApplicantsCard"
export default function ViewApplicants(){
    const params = useParams()
    const id = (params.id) as string
    const {data,error,isLoading} = useViewApplicantsQuery(id)

    const defaultJobs = Array(9).fill(1)
    if(isLoading) return <div className="flex flex-row flex-wrap gap-12 p-4 justify-center h-full min-h-screen">
    {defaultJobs?.map((_,index)=>(<CardSkeleton  key={index}/>))}

    
  </div>
  
    return(
        <>
            <div className="w-full mx-w-[1280px] h-full min-h-screen bg-black flex flex-row flex-wrap  text-white">
                {data && data?.status && data?.applicants?.length? 
                    data?.applicants?.map((item)=><ApplicantsCard applicant={item} key={item._id}/>)
                    :<h2>No Applicants to Show</h2>
                }
            </div>
        </>
    )
}