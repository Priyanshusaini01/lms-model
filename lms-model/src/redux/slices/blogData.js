import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie'; // Import js-cookie

// No need to manually handle the token since it's in cookies
const getTokenFromCookie = () => Cookies.get('HashedCredentials');

export const getAllBlogs = createAsyncThunk('getBlogs', async () => {
  const token = getTokenFromCookie();
  const response = await axios.get('http://localhost:3000/api/blogs/read/allowedBlogs', {
    headers: { Authorization: `Bearer ${token}` }, // Add token to the request headers
    withCredentials: true, // Ensure cookies are sent with the request
  });
  return response.data;
});

export const getBlogSlice = createSlice({
  name: 'getBlogs',
  initialState: {
    blogs: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default getBlogSlice.reducer;
