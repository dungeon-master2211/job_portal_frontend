

const Sidebar = ({children}:any) => {
  return (
    <div className="h-screen w-full absolute top-0 left-0 bg-black z-10 p-4 text-white">
        {children}
    </div>
  )
}

export default Sidebar