import Spline from '@splinetool/react-spline';
import hero from "../assets/hero2.jpg"
import { TrackNextIcon, TrackPreviousIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { Button } from './ui/button';
export  function Rocket() {
  return (
    <Spline scene="https://prod.spline.design/Vb9rrvNFEIxfHCTZ/scene.splinecode" />
  );
}
const trustedBy = ['AirBnB','Google','Microsoft','Netflix','Amazon','Zomato']
const ratings = [
  {
    id:1,
    name:'Sanjay Singh',
    ratings:5,
    comment:"I recently used this job portal, and I must say it's been incredibly helpful in my job search. The interface is clean and user-friendly, making it easy to navigate and filter through relevant job postings"
  },
  {
    id:2,
    name:'Mr. X',
    ratings:4,
    comment:" I appreciate the variety of opportunities listed across different industries, and the advanced search options allow me to refine my search to suit my skills and preferences"
  },
  {
    id:3,
    name:'Akshay Kumar',
    ratings:4,
    comment:"The portal also offers insightful career advice and resume-building tips, which have been valuable in improving my profile."
  },
  {
    id:4,
    name:'Aditya Tiwari',
    ratings:5,
    comment:"Notifications for new job openings and application status updates are prompt, keeping me in the loop at all times. Overall, it's a reliable platform for job seekers looking for their next career move."
  },
  
]
const Home = () => {
  const [currentRating,setCurrentRating] = useState(0)
  return (
    <div className='h-full min-h-screen max-w-[1440px] font-mono flex flex-col items-center bg-black my-0 mx-auto'>
       {/* <Rocket/> */}
       <div className='h-screen max-h-[757px] w-full flex flex-col flex-shrik  md:flex-wrap md:flex-row md:justify-between'>
        <div className='w-full dark z-10 text-white flex flex-col justify-center items-center p-2 lg:w-[50%]'>
          <h1 className='text-[6rem] lg:text-[10rem] lg:m-0'>ROCKET</h1>
          <h1 className='text-[4rem] '>Your</h1>
          <h1 className='text-[6rem] lg:text-[10rem] text-destructive'>CAREER</h1>
          <p className='text-center'>Trusted by 100+ companies across the world.</p>
        </div>
        {/* h-screen max-h-screen object-contain aspect-square bg-black */}
        <div className='absolute lg:relative lg:w-[50%] lg:rounded-full opacity-10 lg:opacity-45 w-full h-full overflow-hidden'>
          <img src={hero} alt="career rocket" className='object-cover md:h-full md:aspect-auto aspect-square' ></img>
        </div>
        
       </div>
       <div className='dark bg-black w-full text-white text-center'>
          <h2 className='text-[3rem] p-4'>Trusted By</h2>
          <div className='p-4 w-full flex flex-row flex-shrink-0 justify-evenly flex-wrap'>
              {trustedBy.map((item,index)=>{
                return <div className='w-fit h-20 p-4 text-2xl' key={index}>{item}</div>
              })}
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-[3rem] p-4'>What People Say</h2>
            <div className='flex flex-row items-center justify-evenly bg-zinc-600 rounded-lg p-2 m-2 sm:w-[600px] h-[300px]'>
              <Button onClick={()=>setCurrentRating(prev=>prev-1>-1 ? prev-1 : ratings.length-1)}><TrackPreviousIcon/></Button>
              
              <div className='max-w-[300px] p-2  m-2 '>
                <h2 className='text-xl'>{ratings[currentRating].name}</h2>
                <span>{Array(ratings[currentRating].ratings).fill("⭐").join("")}</span>
                <p>{ratings[currentRating].comment}</p>
              </div>

              <Button onClick={()=>setCurrentRating(prev=>(prev+1)%ratings.length)}><TrackNextIcon/></Button>
            </div>
          </div>
       </div>
      <div className='h-20 bg-zinc-800 w-full text-white text-center mt-2' >
        © 2024 Career Rockets Inc
        <p>Contact : careerrockets@seemail.com</p>
        <p>Address : 4th Floor, Twin Tower, CA, USA</p>
      </div>
    </div>
  )
}

export default Home