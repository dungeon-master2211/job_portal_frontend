import {z} from "zod"

export const loginFormSchema = z.object({
    email:z.string().email({message:"Invalid email!"}),
    password:z.string().min(6,{message:'Password should be atleast 6 characters!'})
})

export const registerSchema = z.object({
    name:z.string().min(3,{message:"Name should be of 3chars minimum "}),
    email:z.string().email({message:"Invalid email!"}),
    password:z.string().min(6,{message:'Password should be atleast 6 characters!'}),
    role:z.string({required_error:"Please select your role"})

})