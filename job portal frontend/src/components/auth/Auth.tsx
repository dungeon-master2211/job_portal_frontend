import Login from "./Login"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Register from "./Register"


const Auth = () => {
  return (
    <div className="h-full min-h-screen bg-black flex justify-center items-center">
      <Tabs defaultValue="account" className="w-[400px] dark  p-4">
        <TabsList  className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Login</TabsTrigger>
          <TabsTrigger value="password">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Login/>
        </TabsContent>
        <TabsContent value="password"><Register/></TabsContent>
      </Tabs>
    </div>
  )
}

export default Auth