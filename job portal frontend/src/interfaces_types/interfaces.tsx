import { ChangeEvent } from "react"

export interface userRegistration{
    name:string,
    email:string,
    password:string,
    role:string
}
export interface userLoginReturnType{
    id:string,
    name:string,
    role:string,
    status?:Boolean,
    message?:string
}
export interface userRegistrationReturnType{
    status:Boolean,
    message:string
}

export interface userLogin{
    email:string,
    password:string
}

export interface postJobType{
    companyName:string
    jobRole:string
    jobLocation: string
    openTill: string
    noOfOpenings:number
    jobDescription:string,
    technologies:string[]
}

export interface HTMLInputEvent extends ChangeEvent {
    target: HTMLInputElement & EventTarget;
}

export interface ResumeUploadFormData{
    appliedTo:number,
    resume:File|string
}
export interface applyToJobRequestType{
    resume:File
    appliedTo:string
}

export interface myPostedJobsReturnType extends userRegistrationReturnType{
    jobs?:postJobType[]
}