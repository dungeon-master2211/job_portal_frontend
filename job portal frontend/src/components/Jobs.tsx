import Jobcard from "./common/Jobcard"

import { useGetListedJobsQuery } from "../services/fetchJobService"
import CardSkeleton from "./common/cardSkeleton"
const jobs = () => {
    const { data, isLoading } = useGetListedJobsQuery()
    console.log(data)
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

export default jobs