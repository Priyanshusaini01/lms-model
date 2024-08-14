import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie'; // Import js-cookie

// No need to manually handle the token since it's in cookies
const getTokenFromCookie = () => Cookies.get('HashedCredentials');

export const getAllCourses = createAsyncThunk('getCourses', async () => {
  const token = getTokenFromCookie();
  const response = await axios.get('http://localhost:3000/api/courses/read/all', {
    headers: { Authorization: `Bearer ${token}` }, // AdWd token to the request headers
    withCredentials: true, // Ensure cookies are sent with the request
  });
  return response.data;
});

export const getCourseSlice = createSlice({
  name: 'getCourses',
  initialState: {
    courses: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(getAllCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default getCourseSlice.reducer;
