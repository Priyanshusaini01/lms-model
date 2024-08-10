import React from 'react'
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie'; // Import js-cookie

const getTokenFromCookie = () => Cookies.get('HashedCredentials');

export const getUser = createAsyncThunk('getCurrentUser', async () => {
  const token = getTokenFromCookie();
  const response = await axios.get(`http://localhost:3000/api/users/currentUser`, {
    headers: { Authorization: `Bearer ${token}` }, // Add token to the request headers
    withCredentials: true, // Ensure cookies are sent with the request
  });
  return response.data;
});

export const getUserSlice = createSlice({
    name: 'getUser',
    initialState: {
      User: {},
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getUser.pending, (state) => {
          localStorage.clear()
          state.loading = true;
        })
        .addCase(getUser.fulfilled, (state, action) => {
          state.loading = false;
          // console.log(action.payload.email)
          localStorage.clear()
          localStorage.setItem('user_Email', action.payload.email)
          localStorage.setItem('user_Course', action.payload.enrolledCourses.length)
          state.User = action.payload;
        })
        .addCase(getUser.rejected, (state, action) => {
          state.loading = false;
          localStorage.clear()
          state.error = action.error.message;
        });
    },
  });
  
  export default getUserSlice.reducer;
  
  





// No need to manually handle the token since it's in cookies
// const getTokenFromCookie = () => Cookies.get('HashedCredentials');

// export const getAllBlogs = createAsyncThunk('getBlogs', async () => {
//   const token = getTokenFromCookie();
//   const response = await axios.get('http://localhost:3000/api/blogs/read/allowedBlogs', {
//     headers: { Authorization: `Bearer ${token}` }, // Add token to the request headers
//     withCredentials: true, // Ensure cookies are sent with the request
//   });
//   return response.data;
// });

// export const getBlogSlice = createSlice({
//   name: 'getBlogs',
//   initialState: {
//     blogs: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getAllBlogs.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(getAllBlogs.fulfilled, (state, action) => {
//         state.loading = false;
//         state.blogs = action.payload;
//       })
//       .addCase(getAllBlogs.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default getBlogSlice.reducer;

