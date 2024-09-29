import Jobcard from "./common/Jobcard"

// import { useGetListedJobsQuery } from "../services/fetchJobService"
const jobs = () => {
    // const { data, error, isLoading } = useGetListedJobsQuery()
    // console.log(data)
    // if(isLoading) return <div>Loading........</div>
    const alljobs = [1,2,3,4,5]
  return (
    
    <div className="flex flex-row flex-wrap gap-12 p-4 justify-center">
      {alljobs?.map((item,index)=>(<Jobcard key={index}/>))}
    </div>
  )
}

export default jobs