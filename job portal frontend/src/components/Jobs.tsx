import Jobcard from "./common/Jobcard"

import { useGetListedJobsMutation } from "../services/fetchJobService"
import CardSkeleton from "./common/cardSkeleton"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react"
const jobs = () => {
    const [useGetListedJobsQuery,{ data, isLoading }] = useGetListedJobsMutation()
    const [jobQuery,setJobQuery] = useState<string>('')
    console.log(data)
    useEffect(()=>{
      useGetListedJobsQuery({jobQuery:''})
    },[])
    const defaultJobs = Array(9).fill(1)
    if(isLoading) return <div className="flex flex-row flex-wrap gap-12 p-4 justify-center h-full min-h-screen">
      {defaultJobs?.map((_,index)=>(<CardSkeleton  key={index}/>))}
    </div>
    function handleJobQuery(){
      if(jobQuery.trim().length){
        useGetListedJobsQuery({jobQuery})
      }else{
        useGetListedJobsQuery({jobQuery:''})
      }
      
    }
  return (
    <>
      <div className="flex flex-row justify-center items-center p-4"> 
          <Input className="w-[300px]" type="text" placeholder="Company Name, Technology" value={jobQuery} onChange={(e)=>setJobQuery(e.target.value)}/>
          <Button onClick={()=>handleJobQuery()}><MagnifyingGlassIcon/></Button>
      </div>
      <div className="flex flex-row flex-wrap gap-12 p-4 justify-center h-full min-h-screen">
        {data && data?.status && data?.jobs?.length ? data.jobs?.map((item:any)=><Jobcard job={item} key={item._id}/>):
          <h2>No Jobs Found</h2> }
      </div>
    </>
  )
}

export default jobs