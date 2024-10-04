import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Jobs from './components/Jobs.tsx'
import CreateJob from './components/CreateJob.tsx'
import NotFound from './components/NotFound.tsx'
import Home from './components/Home.tsx'

import { Provider } from 'react-redux'
import {store} from "./store/store.tsx"
import Auth from "./components/auth/Auth.tsx"
import ListJob from './components/list_a_job/ListJob.tsx'
import JobDetail from './components/JobDetail.tsx'
import PostedJobs from './components/jobs/PostedJobs.tsx'
const route = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/jobs',
        element:<Jobs/>
      },
      {
        path:'/job_detail/:id',
        element:<JobDetail/>
      },
      {
        path:'/create_job',
        element:<CreateJob/>
      },
      {
        path:"/posted_jobs",
        element:<PostedJobs/>
      },
      {
        path:'/auth',
        element:<Auth/>
      },
      {
        path:'/listjob',
        element:<ListJob/>
      }
    ]

  },
  {
    path:'*',
    element:<NotFound/>
  }
])
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={route}></RouterProvider>
  </Provider>
    
  ,
)
