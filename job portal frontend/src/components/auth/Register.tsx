import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import { registerSchema } from "./formSchema"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
import { Input } from "@/components/ui/input"
import { useRegisterUserMutation } from "@/services/loginService"
import { ButtonLoading } from "../ui/button_with_loader"
import { toast } from 'react-toastify';

const Register = () => {
    
    const registerform = useForm<z.infer<typeof registerSchema>>({
        resolver:zodResolver(registerSchema),
        defaultValues:{
            name:"",
            email:"",
            password:""
        }
    })
    const [registerUserApi,{data,isLoading,error}] = useRegisterUserMutation()
    console.log(isLoading,data)
    if(data){
        toast(data.message,{theme:"dark"})
    }
    if(error && 'status' in error){
        let errMsg = 'error' in error ? error.error : (error.data) 
        
        console.log(errMsg)
        // @ts-ignore
        let finalErrMsg = 'message' in errMsg ? errMsg.message : '' 
        // @ts-ignore
        toast(finalErrMsg,{theme:"dark"})
        
    }
    function onSubmitRegisterForm(values:z.infer<typeof registerSchema>){
        console.log(values)
        registerUserApi(values)
    }

  return (
    <div className="text-white border-solid border-[#4d4d4d] border-[1px] p-8 rounded-md">
        <Form {...registerform}>
            <form onSubmit={registerform.handleSubmit(onSubmitRegisterForm)} className="space-y-8">
                <FormField control={registerform.control} name="name"  render={({field})=>(
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Name" {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}></FormField>
                <FormField control={registerform.control} name="email" render={({field})=>(
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="email@gmail.com" {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}></FormField>
                <FormField control={registerform.control} name="password" render={({field})=>(
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input type="password" placeholder="Password" {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}></FormField>
                <FormField control={registerform.control} name="role" render={({field})=>(
                    <FormItem>
                        <FormLabel>Role</FormLabel>
                        
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Role" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="user">User</SelectItem>
                                    <SelectItem value="admin">Recruiter</SelectItem>
                                </SelectContent>
                            </Select>

                        
                        <FormMessage/>
                    </FormItem>
                )}></FormField>
                <p className="text-sm">By clicking on Register you agree to our Terms and Conditions.</p>
                
                {isLoading?<ButtonLoading className="w-full">Registering..</ButtonLoading>:<Button type="submit" className="w-full" >Register</Button>}
            </form>

        </Form>
        
    </div>
  )
}

export default Register