import { NavLink } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"
import { useSelector,useDispatch } from "react-redux"
import { RootState } from "@/store/store"
import { authenticationService, useLogoutUserMutation } from "@/services/loginService"
import { loggedOut } from "@/store/loginState"
const NavMenu = ()=>{
  return (
    <>
    <NavigationMenuItem>
        
            <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
              
                
            <NavLink to="/" >Home</NavLink>
                
              
            </NavigationMenuLink>
            
          </NavigationMenuItem>
          <NavigationMenuItem>
         
                <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                <NavLink to="/jobs">Jobs</NavLink>
                </NavigationMenuLink>
                
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
              <NavigationMenuContent className="">
              <ul className="grid gap-3 p-4 md:w-[320px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3"> 
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild><NavLink to=""> My Profile</NavLink></NavigationMenuLink> 
                </li>
                <li className="row-span-3"> 
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild><NavLink to="/listjob"> List a Job</NavLink></NavigationMenuLink> 
                </li>
                <li className="row-span-3"> 
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild><NavLink to=""> Applied Jobs</NavLink></NavigationMenuLink>
                 </li>
                <li className="row-span-3">
                   <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild><NavLink to="/posted_jobs"> Posted Jobs</NavLink></NavigationMenuLink> 
                </li>
                <li className="row-span-3">
                   <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild><NavLink to=""> Messages</NavLink></NavigationMenuLink> 
                </li>
                
              </ul>
                
                
              </NavigationMenuContent>
          </NavigationMenuItem>
        </>
  )
}

const NavCode =()=>{
  return (
    <NavigationMenu className="dark sm:block">
        <NavigationMenuList>
          <NavMenu/>
        </NavigationMenuList>
    </NavigationMenu>
  )
}

const Navbar = () => {
  const {isLoggedIn} = useSelector((store:RootState)=>store.loginState)
  const dispatch = useDispatch()
  const [callLogoutApi,{data,error}] = useLogoutUserMutation()
  function logoutUser(){
      callLogoutApi()
      dispatch(authenticationService.util.resetApiState())

  }
  if(error) console.log(error)
  if(data){
    console.log(data)
    console.log('calling logout reducer')
    if(data?.status) dispatch(loggedOut())
  }
  return (
    <>
      <div className="bg-[black] p-4 flex flex-row justify-between items-center text-white">
          {/* <Button className="sm:hidden">
            <HamburgerMenuIcon/>
          </Button> */}
        
        <h1 className="text-xl sm:text-3xl">Career Rocket</h1>
        <div className="hidden sm:block">
        <NavCode/> 
        </div>
        {isLoggedIn? <Button onClick={()=>logoutUser()}>LogOut</Button> : 
        <Button asChild>
          <NavLink to="/auth">Login</NavLink>
        </Button>
        }
        

      </div>
      <div className="bg-[black] p-4 flex flex-row justify-between items-center text-white sm:hidden" >
          <NavCode/>
      </div>
    </>

  )
}

export default Navbar