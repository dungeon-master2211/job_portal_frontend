
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import {env} from "../../config"
import { DownloadIcon } from "@radix-ui/react-icons"
import { useChangeApplicantStatusMutation } from "@/services/fetchJobService"
import showErrorToast from "../common/toast_common"
import { toast } from "react-toastify"
export default function ApplicantsCard({applicant}:any){
    const currentApplicant = applicant?.appliedBy
    const backendUrl = env.backendUrl
    let queryString = {appliedBy:currentApplicant?._id,appliedTo:applicant?.appliedTo}
    const downloadUrl = new URL(`${backendUrl}/download_resume?`+new URLSearchParams({...queryString}).toString()).toString()
    const [changeStatusApi,{data,error}] = useChangeApplicantStatusMutation()
    if(data){
        if(data.status) toast(data.message,{theme:"dark"})
    }
    if(error && 'status' in error){
        showErrorToast(error)
    }
    function changeStatus(action:string){
        changeStatusApi({...queryString,action})
    }
    return(
        <div className="max-w-[320px] h-[220px] font-mono flex flex-row bg-zinc-800 text-white p-4 m-4 border-[1px] border-zinc-500 border-solid rounded-lg">
            <div className="flex flex-col gap-2 w-full">
                <h2>{currentApplicant?.name}</h2>
                <p>{currentApplicant?.email}</p>
                <Badge className="w-fit">{applicant?.status?.toUpperCase()}</Badge>
                <Button variant={"outline"} className="text-black hover:text-white hover:bg-lime-700" asChild><a href={downloadUrl}><DownloadIcon/>Download Resume </a></Button>
                {applicant?.status?.toLowerCase()==='pending' && <div className="flex flex-row justify-between items-center w-full">
                    <Button variant={"secondary"} onClick={()=>changeStatus('accepted')}>Accept</Button>
                    <Button variant={"destructive"} onClick={()=>changeStatus('rejected')}>Reject</Button>
                </div>}
                
            </div>
            <div></div>
        </div>
    )
}