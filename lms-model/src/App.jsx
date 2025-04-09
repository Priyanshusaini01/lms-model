import { useEffect, useState } from "react";
// import AllPrograms from "./Components/allprograms/AllPrograms";
// import Herosection from "./Components/herosection/Herosection";
// import Blog from "./Components/blog/Blog";
// import Searchbar from "./Components/search/Searchbar";
import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import AuthNav from "./Components/navbar/AuthNav";
import Home from "./pages/Home/Home";
// import Courses from "./Components/courses/Courses";
// import Sponser from "./Components/sponser/Sponser";
import Footer from "./Components/footer.jsx/Footer";
import {createBrowserRouter , Outlet, RouterProvider} from 'react-router-dom'
import Contact from './pages/Contact/Contact';
import BlogPage from './pages/BlogPage/BlogPage';
import SelectedBlog from './pages/SelectedBlog/SelectedBlog'
import Login from "./pages/Authantication/Login/Login";
import Courses from "./pages/courses/Courses";
import About from "./pages/About/About";
import SignUp from './pages/Authantication/SignUp/SignUp';
import Class from "./pages/ClassRoom/Class";
import { useDispatch, useSelector } from "react-redux";
import  {getUser}  from "./redux/slices/currentUser";
import { getAllCourses } from "./redux/slices/courses";
import Navclass from "./Components/navclass/Navclass";
import Profile from "./Components/profile/Profile";
import Video from "./pages/Video/Video";
import CourseForm from './Components/courseform/CourseForm';
import Photo from "./Components/profile/Photo";
import AccountSecurity from "./Components/profile/AccountSecurity";
import Subscription from "./Components/profile/Subscription";
import Notifications from "./Components/profile/Notifications";
import AccountClose from "./Components/profile/AccountClose";
import Sidebar from "./profile/sidebar/Sidebar";
import PublicProfile from "./Components/profile/PublicProfile";
import PrivacySettings from "./Components/profile/PrivacySettings";
import Dasboard from "./Admin/Dasboard";
import Dash from "./Admin/Dash";
import AdHome from "./Admin/AdHome";
import AdSettings from "./Admin/AdSettings";
import Vid from "./pages/Vid";
import Husk from "./pages/Husk";



function App() {
  
  const dispatch = useDispatch(); //
  const user = useSelector((state) => state.currentUser.User); //
  useEffect(() => {
    dispatch(getUser()); //
  }, [dispatch]); //


    
  const course = useSelector((state) => state.courses.courses); //
  useEffect(() => {
    dispatch(getAllCourses()); //
  }, [dispatch]); //

  const router = createBrowserRouter([
    {
      path:'/',
      element: <><Home/></>
    },{
      path: '/contact',
      element: <><Navbar/><Contact/></>
    },{
      path:"/blogs",
      element: <><Navbar/><BlogPage/></>,
    },{
      path:"/courses",
      element: <><Navbar/><Courses/></>,
    },{
      path:"/about",
      element: <><Navbar/><About/></>,
    },
    {
      path: '/blogs/:id',
      element: <><Navbar/><SelectedBlog/></>
    },
    {
      path: '/login',
      element: <><AuthNav text="SignUp" route='signup'/><Login/></>
    },{
      path: '/signup',
      element: <><AuthNav text="Login" route='login'/><SignUp/></>
    },{
      path: `/class/:user`,
      element: <><Navclass/><Class/></>
    },{
      path: `/profile`,
      element: <><Navbar/><Profile/></>
    },{
      path: '/video',
      element: <><Navbar/><Video/></>
    },{
      path:"/uploadCourse",
      element: <><Navbar/><CourseForm/></>
    },
    {
      path: `/courses/:title`,
      element: <><Navbar/><Video/></>
    },
    {
      path:`/photo`,
      element: <><Navbar/><Photo/></>
    },{
      path:`/account`,
      element: <><Navbar/><AccountSecurity/></>
    },{
      path:`/subscription`,
      element: <><Navbar/><Subscription/></>
    },{
      path:`/notifications`,
      element: <><Navbar/><Notifications/></>
    },{
      path:`/closeaccount`,
      element: <><Navbar/><AccountClose/></>
    },{
      path:`/sidebar`,
      element: <><Navbar/><Sidebar/></>
    },{
      path:`/public`,
      element: <><Navbar/><PublicProfile/></>
    },{
      path:'/privacy',
      element: <><Navbar/><PrivacySettings/></>
    },{
      path:'/dashbod',
      element: <><Navbar/><Dasboard/></>
    },{
      path:`/home`,
      element: <><Navbar/><AdHome/></>
    },{
      path:`/setting`,
      element: <><Navbar/><AdSettings /></>
    },{
      path:`/prof`,
      element: <><Navclass/><Dash/></>
    },{
      path:`/vid`,
      element: <><Navbar/><Vid/></>
    },{
      path:"/husk",
      element: <><Navbar/><Husk/></>
    }

  ])

  return (
    <>
      <RouterProvider router={router}/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
