import React, { useEffect } from 'react'
import Cookies from 'js-cookie'; // Import js-cookie
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/slices/currentUser';

const Class = () => {
  
  // const dispatch = useDispatch(); //
  const user = useSelector((state) => state.currentUser.User); //
  // useEffect(() => {
  //   dispatch(getUser()); //
  // }, [dispatch]); //

  return (
    <div>
      The token from cookie: {user.name}
      {
        console.log(user)
      }
    </div>
  )
}

export default Class
