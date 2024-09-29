import Spline from '@splinetool/react-spline';

export  function Rocket() {
  return (
    <Spline scene="https://prod.spline.design/Vb9rrvNFEIxfHCTZ/scene.splinecode" />
  );
}

const Home = () => {
  return (
    <div className='h-full'>
       <Rocket/>
        {/* bg-[url('${hero}')] */}
        {/* <div className={`w-screen h-screen`}>
            <div className="absolute top-[40%] left-[20%] lg:left-[28%] text-white z-10 flex flex-col justify-center items-center bg-black bg-opacity-20 p-4">
                <h1 className=" text-2xl">We Help You To</h1>
                <h1 className=" text-6xl sm:text-[10em] font-serif" >GROW</h1>
                <div className="bg-slate-600 md:w-80 p-2">
                    <input type="text" placeholder="React, Angular, ..." className="bg-none"/>
                </div>
            </div>
          */}
            {/* <img src={hero} alt="hero" className="w-full h-full blur-sm object-cover"/> */}
        {/* </div> */} 
    </div>
  )
}

export default Home