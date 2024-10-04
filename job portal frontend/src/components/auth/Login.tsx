import { loginFormSchema } from "./formSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import {z} from "zod"
import { useForm } from "react-hook-form"
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
import { useLoginUserMutation } from "@/services/loginService"
import { toast } from "react-toastify"
import { ButtonLoading } from "../ui/button_with_loader"
import { useDispatch } from "react-redux"
import { loggedIn } from "@/store/loginState"
const Login = () => {
    const dispatch = useDispatch()
    const loginForm = useForm<z.infer<typeof loginFormSchema>>({
        resolver:zodResolver(loginFormSchema),
        defaultValues:{
            email:"",
            password:"",
        }
    })
    function showToast(msg:string){
        toast(msg,{theme:"dark"})
    }
    const [callLoginApi,{data,isLoading,error}] = useLoginUserMutation()
    if(data){
        showToast(`Welcome ${data?.name}`)
        dispatch(loggedIn(data))
    }
    if(error && 'status' in error){
        let errMsg = 'error' in error ? error.error : (error.data) 
        
        console.log(errMsg)
        // @ts-ignore
        let finalErrMsg = 'message' in errMsg ? errMsg.message : '' 
        // @ts-ignore
        showToast(finalErrMsg)
        
    }
    function onSubmitLoginForm(values: z.infer<typeof loginFormSchema>){
        console.log(values)
        callLoginApi(values)
    }
  return (
    <div className=" text-white border-solid border-[#4d4d4d] border-[1px] p-8 rounded-md" >
        <Form {...loginForm}>
            <form onSubmit={loginForm.handleSubmit(onSubmitLoginForm)} className="space-y-8">
                <FormField control={loginForm.control} name="email"
                   render={({field})=>(
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="email" {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                   )} >
                </FormField>
                <FormField control={loginForm.control} name="password"
                    render={({field})=>(
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="password" {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}>

                </FormField>
                {isLoading ? <ButtonLoading className="w-full">Loggin In</ButtonLoading> :
                <Button type="submit" className="w-full">Login</Button> }
                
            </form>
        </Form>
        
    </div>
  )
}

export default Login