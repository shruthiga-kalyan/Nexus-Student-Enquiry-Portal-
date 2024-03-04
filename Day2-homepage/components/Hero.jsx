
import Blog from "./ui/Login/BLOG";
import Contact from "./ui/Login/CONTACT";
import Footer from "./ui/Login/FOOTER";
import Navbar from "./ui/Login/NAVBAR";
import Statistics from "./ui/Login/STATISTICS";
const Cover = () => {
  return (
    <div>
     <Navbar></Navbar>
      <section className="text-gray-600 body-font bg-gray-200">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="/public/cover-lady.png"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Education Plus+
        <br className="hidden lg:inline-block"/>
      </h1>
      <p className="mb-8 leading-relaxed">Unlimited access to 7,000+ world-class courses, hands-on projects, and job-ready certificate programs—all included in your subscription</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Start 7-day free trial </button>
        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
  </div>
</section>

   <Blog/>
   <Statistics/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Cover
