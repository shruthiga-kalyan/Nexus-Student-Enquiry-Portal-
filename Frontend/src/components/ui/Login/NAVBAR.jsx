import { useNavigate } from "react-router-dom"


const Navbar = () => {
  const navigate= useNavigate();
  const handleNavigate=(path)=>{
    navigate(path);
  };

 

  return (
    <div>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" >
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" onClick={() => handleNavigate('/')}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
        
     
      <span className="ml-3 text-xl">Vidhya</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-yellow-300 "onClick={() => handleNavigate('/')}>Learn</a>
      <a className="mr-5 hover:text-yellow-300" onClick={() => handleNavigate('/pricing')}> Pricing</a>
      <a className="mr-5 hover:text-yellow-300"   onClick={() => handleNavigate('/team')}>Team</a>
   
    </nav>
    <button onClick={() => handleNavigate('/signin')} className=" mr-5  inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-300 rounded text-base mt-4 md:mt-0">Login
      <svg fill="none" stroke="currentColor"  className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    
    <button onClick={() => handleNavigate('/signup')} className="mr-3 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-400 rounded text-base mt-4 md:mt-0" >Signup
    <svg fill="none" stroke="currentColor"  className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>

    </div>
  )
}

export default Navbar
