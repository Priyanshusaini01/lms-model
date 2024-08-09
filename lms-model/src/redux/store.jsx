import {configureStore} from "@reduxjs/toolkit"
import  getBlog  from "./slices/blogData"
// import currentUser from "./slices/currentUser"
import currentUser from "./slices/currentUser"

export const store = configureStore({
    reducer:{
        blogs: getBlog,
        currentUser: currentUser
    }
})