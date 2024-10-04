import { useGetListedJobsQuery } from "@/services/fetchJobService";
import { useParams } from "react-router-dom";
import CardSkeleton from "./common/cardSkeleton";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
    Dialog,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { ApplyJob } from "./ApplyJob";
export default function JobDetail(){
    const params = useParams()
    const id = params.id
    const {data} = useGetListedJobsQuery()
    const job = data?.jobs?.filter((item:any)=>item._id===id)
    if (!job?.length) <div className="flex flex-col"><CardSkeleton></CardSkeleton></div> 
    function transformDate(date:string){
        try{
            return new Date(date).toDateString()
        }catch(e){
            return ""
        }
        
    }
    return(
        
        <div className="text-center font-mono flex flex-col justify-center items-center h-full min-h-screen gap-5 max-w-[900px] dark bg-black text-white my-5 mx-auto p-4 rounded-lg ">
            {job && job[0] ? <>
            <h1 className=" text-[5rem] sm:text-[6rem] mt-4 font-mono">{job[0]?.companyName}</h1>
            <h1 className="text-xl ">{job[0]?.jobRole}</h1>
            <h2>No. Of Openings: {job[0]?.noOfOpenings} </h2>
            <h2> No. Of Applicants: {job[0]?.applicants}</h2>
            <div className="flex flex-row flex-wrap justify-center items-center gap-5">
                <Badge className="text-lg">{job[0]?.jobLocation}</Badge>
                <Badge className="text-lg">Open Till: {transformDate(job[0]?.openTill)}</Badge>
                <Badge className="text-lg">Posted On: {transformDate(job[0]?.postedOn)}</Badge>
            </div>
            
            <div className="w-11/12">
                <h2 className="text-2xl">Technologies</h2>
                <div className="flex flex-row flex-wrap justify-center gap-2 my-2">
                    {job[0]?.technologies?.map((item:string,index:number)=><Badge variant={"destructive"} key={index} className="text-lg">{item}</Badge>)}
                
                </div>
                <div>
                    <h2 className="text-2xl">Job Description</h2>
                    <h2 className="">{job[0]?.jobDescription}</h2>
                </div>
            </div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button >Apply To This Job</Button>
                </DialogTrigger>
                <ApplyJob job_id={job[0]?._id}/>
            </Dialog>
            </>:
            <h2>No Jobs To Show</h2>
            }
            
        </div>
    )
}