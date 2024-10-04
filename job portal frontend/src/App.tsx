

import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import 'react-toastify/dist/ReactToastify.css';

import { useUserSessionQuery } from './services/loginService';
import { loggedIn, loggedOut } from './store/loginState';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
function App() {
  const dispatch = useDispatch()
  const {data,error} = useUserSessionQuery()
    if(data){
      if(data.status) dispatch(loggedIn(data))
    }
    else if(error){
      dispatch(loggedOut())
    }
  // useEffect(()=>{
    
  // },[])
  return (
    <>
      <Navbar/>
      <Outlet/>
      <ToastContainer/>
    </>
  )
}

export default App
