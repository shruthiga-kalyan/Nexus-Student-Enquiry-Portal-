
import './App.css';
import Cover from './components/Hero';
import Signin from './components/ui/Login/SIGIN';

import Signup from './components/SIGNUP';
// import Footer from './components/ui/Login/FOOTER';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Pricing from './components/ui/Login/PRICING';
// import AdminDash from './pages/admin/ADMINDASH';
import AdminSideBar from './pages/admin/ADMINSIDE';
import AdminNavbar from './pages/admin/ADMINNAV';
import Courses from './pages/admin/ADMINCOURSES';
import AdminEnq from './pages/admin/ADMINENQUIRY';
import AdminPay from './pages/admin/ADMINPAYMENT';


// import { useNavigate} from 'react-router-dom';

// import firebase from 'firebase/app';
// import 'firebase/auth';


// // firebase.initializeApp(firebaseConfig);
// const LazyLogin = lazy(()=> import("./components/ui/Login/SIGIN"))
// const LazySignup = lazy(()=> import("./components/SIGNUP"))
// const LazyPricing= lazy(()=> import("./components/ui/Login/PRICING"))
function App() 
{  
  // const firebaseConfig = {
  //   apiKey: "AIzaSyA95DWTLo1iko43eWXLQGAmvy5YZXHAR_g",
  //   authDomain: "YOUR_AUTH_DOMAIN",
  //   projectId: "YOUR_PROJECT_ID",
  //   storageBucket: "YOUR_STORAGE_BUCKET",
  //   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  //   appId: "YOUR_APP_ID"
  // };

  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Cover/>}/>
          <Route exact path="/signin" element={<Signin/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/pricing" element={<Pricing/>}/>
          <Route exact path="/admin/sidebar" element={<AdminSideBar/>}/>
          <Route exact path="/admin/navbar" element={<AdminNavbar/>}/>
          <Route exact path="/admin/courses" element={<Courses/>}/>
          <Route exact path="/admin/enquiry" element={<AdminEnq/>}/>
          <Route exact path="/admin/pay" element={<AdminPay/>}/>

         
        </Routes> 

        {/* <Footer/> */}
        </BrowserRouter>
  )
}

export default App
