import  { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cover from './components/Hero';
import Loader from './components/ui/Login/Loader';


// Lazy loading components
const LazySignin = lazy(() => import('./components/ui/Login/SIGIN'));
const LazySignup = lazy(() => import('./components/SIGNUP'));
const LazyPricing = lazy(() => import('./components/ui/Login/PRICING'));
const LazyTeam = lazy(() => import('./components/ui/Login/TEAM'));

const LazyAdminSideBar = lazy(() => import('./pages/admin/ADMINSIDE'));
const LazyAdminNavbar = lazy(() => import('./pages/admin/ADMINNAV'));
const LazyCourses = lazy(() => import('./pages/admin/ADMINCOURSES'));
const LazyAdminEnq = lazy(() => import('./pages/admin/ADMINENQUIRY'));
const LazyAdminPay = lazy(() => import('./pages/admin/ADMINPAYMENT'));
const LazyAdminDashboard = lazy(() => import('./pages/admin/ADMINDASH'));
const LazyAdminAddCourses = lazy(() => import('./pages/admin/ADMINADDCOURSE'));



const LazyUserCourses = lazy(() => import('./pages/user/USERCOURSES'));
const LazyUserAddEnq = lazy(() => import('./pages/user/USERDDENQ'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route exact path="/" element={<Cover />} />
          <Route exact path="/signin" element={<LazySignin />} />
          <Route exact path="/signup" element={<LazySignup />} />
          <Route exact path="/pricing" element={<LazyPricing />} />
          <Route exact path="/team" element={<LazyTeam />} />

          <Route exact path="/admin/sidebar" element={<LazyAdminSideBar />} />
          <Route exact path="/admin/navbar" element={<LazyAdminNavbar />} />
          <Route exact path="/admin/courses" element={<LazyCourses />} />
          <Route exact path="/admin/enquiry" element={<LazyAdminEnq />} />
          <Route exact path="/admin/pay" element={<LazyAdminPay />} />
          <Route exact path="/admin/dashboard" element={<LazyAdminDashboard/>} />
          <Route exact path="/admin/addCourses" element={<LazyAdminAddCourses/>} />

          <Route exact path="/user/courses" element={<LazyUserCourses/>} />
          <Route exact path="/user/addEnquiry" element={<LazyUserAddEnq/>} />
        </Routes>
        {/* <LazyFooter /> */}
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
