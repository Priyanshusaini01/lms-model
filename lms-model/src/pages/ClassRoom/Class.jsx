import React, { useEffect } from 'react'
import Cookies from 'js-cookie'; // Import js-cookie
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/slices/currentUser';

const Class = () => {

  const user = useSelector((state) => state.currentUser.User); //  
  // const dispatch = useDispatch(); //
  return (
    <div>
      {
        user.name ?  `The token from cookie: ${user.name}` : <h1>Please Login First</h1>
      }
    </div>
  )
}

export default Class
