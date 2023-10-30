import React from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import SignIn from '../components/Signin'
import SignUp from "../components/Signup"
import Create from "../components/Create"
import Dashboard from "../components/Dashboard"
import Blogs from "../components/Blogs"
import Home from '../components/Home'
import Header from '../components/Header'
 
 function AppRouter() {
   return <Routes>
   <Route path='/Create' element={<><Header/><Create/></>}/>
   <Route path='/Dashboard' element={<><Header/><Dashboard/></>}/>
   <Route path='/SignUp' element={<SignUp/>}/>
   <Route path='/home' element={<><Header/><Home/></>}/>
   <Route path='/Blog/:id' element={<><Header/><Blogs/></>}/>
   <Route path='/' element={<SignIn/>}/>
   <Route path='/*' element={<Navigate to = '/'/>}/>
   </Routes>
 }
 
 export default AppRouter