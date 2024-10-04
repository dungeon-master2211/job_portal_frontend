import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import { jobSchema } from "./schema"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useState, ChangeEvent } from "react"
import { usePostJobMutation } from "@/services/fetchJobService"
import { postJobType } from "@/interfaces_types/interfaces"
import {toast} from "react-toastify"
import showErrorToast from "../common/toast_common"
const ListJob = () => {
    const [_,setTech] = useState<string>('')
    const [techBadge,setTechBadge]= useState<string[]>([])
    const [postJobApi,{data,error}] = usePostJobMutation()
    function onChangeTech(e:ChangeEvent<HTMLInputElement>){
        let techs:string = e.target?.value
        let techArray:string[] = techs.split(',').filter(item=>item.trim().length!==0)
        setTechBadge(techArray)
        setTech(techs)
    }
    const jobform = useForm<z.infer<typeof jobSchema>>({
        resolver:zodResolver(jobSchema),
        defaultValues:{
            companyName:"",
            jobRole:"",
            jobLocation:"",
            openTill:"",
            noOfOpenings:"0",
            jobDescription:""
        }
    })
    function onSubmitJobForm(values:z.infer<typeof jobSchema>){
        let jobData:postJobType = {...values,technologies:techBadge,noOfOpenings:Number(values.noOfOpenings)}
        console.log(jobData)
        if(techBadge.length>0){
            console.log('sending job to list')
            postJobApi(jobData)
        }
    }
    
    if(data){
        if(data.status) toast(data.message,{theme:"dark"})
    }
    if(error && 'status' in error){
        showErrorToast(error)
    }
  return (
    <><h1 className="text-6xl text-center my-5">List A Job</h1>
    <div className="bg-black text-white w-[320px] my-0 mx-auto p-4 sm:w-[600px] md:w-[768px] rounded-lg">
        
        <Form {...jobform} >
            <form onSubmit={jobform.handleSubmit(onSubmitJobForm)} className="space-y-8">
                <FormField control={jobform.control} name="companyName" render={({field})=>(
                    <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Microsoft, Google..." {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}></FormField>
                <FormField control={jobform.control} name="jobRole" render={({field})=>(
                    <FormItem>
                        <FormLabel>Job Role</FormLabel>
                        <FormControl>
                            <Input placeholder="Job role" {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}></FormField>
                <FormField control={jobform.control} name="jobLocation" render={({field})=>(
                    <FormItem>
                        <FormLabel>Job Location</FormLabel>
                            <FormControl>
                                <Input placeholder="Job Location" {...field}/>
                            </FormControl>
                            <FormMessage/>
                        
                    </FormItem>
                )}></FormField>
                <FormField control={jobform.control} name="openTill" render={({field})=>(
                    <FormItem>
                        <FormLabel>Open Till</FormLabel>
                        <FormControl>
                            <Input type="date" {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}></FormField>
                <FormField control={jobform.control} name="noOfOpenings" render={({field})=>(
                    <FormItem>
                        <FormLabel>No. of Openings</FormLabel>
                        <FormControl>
                            <Input type="number" {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}></FormField>
                <div>{!!techBadge?.length && techBadge?.map((item,index)=><Badge key={index}>{item}</Badge>)}</div>
                
                <label className="text-sm font-medium ">
                    Technologies
                    <Input name="technology" placeholder="add technologies" onChange={onChangeTech}/>
                </label>
                <span className="text-sm font-medium">Write Technology as commma(,) separated values.</span>
                {!techBadge?.length &&<span className="text-sm font-medium text-destructive"> Minimum 1 Tech stack is Required</span> }
                {/* <FormField control={jobform.control} name="" render={({field})=>()}></FormField> */}
                <FormField control={jobform.control} name="jobDescription" render={({field})=>(
                    <FormItem>
                        <FormLabel>Job Description</FormLabel>
                        <FormControl>
                        <Textarea
                            placeholder="Description about job..."
                            className="resize-none"
                            {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}></FormField>
                <Button type="submit" className="w-full text-xl">List Job</Button>
            </form>
        </Form>
    </div>
    </>
  )
}

export default ListJob