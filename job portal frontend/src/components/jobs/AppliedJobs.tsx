import { useViewMyAppliedJobsMutation } from "@/services/fetchJobService"
import CardSkeleton from "../common/cardSkeleton"
import {toast} from "react-toastify"
import showErrorToast from "../common/toast_common"
import { useEffect, useState } from "react"
import Jobcard from "../common/Jobcard"
import { Badge } from "../ui/badge"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
export default function AppliedJobs(){
    const [getMyAppliedJobs,{data,isLoading,error}] = useViewMyAppliedJobsMutation()
    const [companyNameToSearch,setCompanyNameToSearch] = useState('')
    useEffect(()=>{
        getMyAppliedJobs('')
    },[])

    function handleAppliedJobSearch(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault()
        getMyAppliedJobs(companyNameToSearch)
    }

    const defaultJobs = Array(9).fill(1)
    if(isLoading) return <div className="flex flex-row flex-wrap gap-12 p-4 justify-center h-full min-h-screen">
      {defaultJobs?.map((_,index)=>(<CardSkeleton  key={index}/>))}
    </div>
    if(data){
        if(data.status) toast(data.message,{theme:"dark"})
    }
    if(error && 'status' in error){
        showErrorToast(error)
    }
    return(
        <>
            {data && data?.status && data?.jobs?.length ? 
            <div>
                <div className="flex flex-row justify-center p-4">
                        <form className="flex flex-row">
                            <Input type="text" value={companyNameToSearch} placeholder="Company Name.." name="search" className="w-[300px]" onChange={(e)=>setCompanyNameToSearch(e.target.value)}/>
                            <Button onClick={(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>handleAppliedJobSearch(e)}><MagnifyingGlassIcon/></Button>
                        </form>
                </div>
                <div className="flex flex-row flex-wrap gap-12 p-4 justify-center h-full min-h-screen">
                    
                    {data.jobs.map((item)=>{
                        return <div className="dark bg-black h-fit w-fit p-4 rounded-lg">
                            <Badge className="mb-2">{(item?.status).toString()}</Badge>
                         <Jobcard job={item.appliedTo} key={item._id} appliedJob={true}/>
                        </div>
                    })}
                </div>
            </div>
                    :<h2 className="text-center">No Applied Jobs</h2>
            }
        </>
    )
}