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

const Login = () => {
    const loginForm = useForm<z.infer<typeof loginFormSchema>>({
        resolver:zodResolver(loginFormSchema),
        defaultValues:{
            email:"",
            password:"",
        }
    })

    function onSubmitLoginForm(values: z.infer<typeof loginFormSchema>){
        console.log(values)
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

                <Button type="submit" className="w-full">Login</Button>
            </form>
        </Form>
    </div>
  )
}

export default Login