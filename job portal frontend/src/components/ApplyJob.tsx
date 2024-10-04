
import { Button } from "@/components/ui/button"
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { HTMLInputEvent } from "@/interfaces_types/interfaces"
import { useState } from "react"
import { useApplyToJobMutation } from "@/services/fetchJobService"
import {toast} from "react-toastify"
import showErrorToast from "./common/toast_common"
export function ApplyJob({job_id}:any) {
  const [file,setFile] = useState<File>()
  console.log('job id',job_id)

  // using applying to job mutation to get reducer function to call
  const [applyToJobApi,{data,error}] = useApplyToJobMutation()
  if(data){
    if(data.status) toast(data.message,{theme:"dark"})
  }
  if(error && 'status' in error){
      showErrorToast(error)
  }
  function handleResumeUpload(e:HTMLInputEvent){
    const file = e.target?.files ? e.target?.files[0] : undefined
    setFile(file)
    
  }
  function uploadResume(){
    if(file){
      const applyDetail = new FormData()
      applyDetail.append('resume',file?file:'')
      applyDetail.append('appliedTo',job_id)
      applyToJobApi(applyDetail)
    }
    else{
      toast("Please select resume to upload",{theme:"dark"})
    }
  }
  return (
    <DialogContent className="sm:max-w-[425px] dark text-white">
        <DialogHeader>
          <DialogTitle>Apply For Job</DialogTitle>
          <DialogDescription>
            Attach Your Resume here:
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Resume
            </Label>
            <Input id="file" type="file" className="col-span-3" accept=".doc,.docx,.pdf" onChange={(e)=>handleResumeUpload(e)} />
          </div>
          
        </div>
        <DialogFooter>
          <Button type="submit" onClick={()=>uploadResume()}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    
  )
}

