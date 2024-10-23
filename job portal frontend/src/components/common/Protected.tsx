import { RootState } from "@/store/store";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface Props{
    children:string| JSX.Element| JSX.Element[] |(()=>JSX.Element) | ReactNode
    allow:string
}

export default function Protected({children,allow}:Props){
    const role = useSelector((store:RootState)=>store.loginState.role)
    const isAllowed = role===allow
    return (
        isAllowed?<>{children}</>:<Navigate to='/'/>
    )
}