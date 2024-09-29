import {z} from "zod"

export const jobSchema= z.object({
    companyName:z.string({required_error:"Company Name is required"}).min(3,{message:"Company name should be min of 3 letters"}),
    jobRole:z.string({required_error:"Job Role is required"}).min(3,{message:"Job Role should be min of 3 letters"}),
    jobLocation:z.string({required_error:"Job Location is required"}),
    openTill:z.string({required_error:"Application closing date is required"}).date(),
    noOfOpenings:z.string({required_error:"No of opening is required"}).refine((val) => !Number.isNaN(parseInt(val, 10)), {
        message: "Expected number, received a string"
      }).refine((val)=>Number(val)>0,{message:"Minimum value should be 1"}),
    // technologies:z.array(z.string()).min(1,{message:"Minimum 1 Technology is required"}),
    jobDescription:z.string({required_error:"Job Description is required"}).min(120,{
        message:"Job Description should be minimum of 120 chracters"
    })
})