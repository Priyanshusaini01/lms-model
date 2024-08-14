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
import Profile from "./pages/Profile/Profile";


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
      element: <><AuthNav/><Login/></>
    },{
      path: '/signup',
      element: <><SignUp/></>
    },{
      path: `/class/:user`,
      element: <><Navbar/><Class/></>
    },{
      path: `/profile`,
      element: <><Navbar/><Profile/></>
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
