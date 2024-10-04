import { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import { toast } from "react-toastify"
function showToast(msg:string){
    toast(msg,{theme:"dark"})
}
export default function showErrorToast(error:FetchBaseQueryError){
    
    if(error && 'status' in error){
        let errMsg = 'error' in error ? error.error : (error.data) 
        
        console.log(errMsg)
        // @ts-ignore
        let finalErrMsg = 'message' in errMsg ? errMsg.message : '' 
        // @ts-ignore
        showToast(finalErrMsg)
        
    }
}