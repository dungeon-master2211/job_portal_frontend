import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { NavLink } from "react-router-dom"

const Jobcard = ({job}:any) => {
    let openTill = job?.openTill
    let postedOn = job?.postedOn
    if(openTill) openTill= new Date(openTill).toDateString()
    if(postedOn) postedOn= new Date(postedOn).toDateString()

   
  return (
    <div className="w-[320px">
        <Card className="dark w-[320px]">
            <CardHeader>
                <CardTitle>{job?.companyName}</CardTitle>
                <CardDescription>{job?.jobDescription.slice(0,120)}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{job?.jobRole}</p>
                <Badge >{job?.jobLocation}</Badge>
                <div className="mt-2">
                    <Badge className="" variant={"destructive"}>Openings: {job?.noOfOpenings}</Badge>
                    <Badge className="ml-2" variant={"destructive"}>Applicants: {job?.applicants}</Badge>

                </div>

                <Badge className="block text-sm font-medium mt-2">Open Till: {openTill}</Badge>
                <Badge className="block text-sm font-medium mt-2">Posted On: {postedOn}</Badge>
                
            </CardContent>
            <CardFooter>
                <Button className="w-full" asChild><NavLink to={`/job_detail/${job._id}`} >View Details</NavLink></Button>
            </CardFooter>
        </Card>

    </div>
  )
}

export default Jobcard