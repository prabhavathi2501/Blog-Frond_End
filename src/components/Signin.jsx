import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {toast} from 'react-toastify'
import AxiosService from '../utils/ApiService'
import { useNavigate } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import { ImBlogger2 } from "react-icons/im";


function Signin() {
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")
  let navigate=useNavigate()

  let  handleLogin = async()=>{
    try {
      let res = await AxiosService.post('/user/login',{
        email,
        password
      })
      if(res.status===200)
      {
        toast.success(res.data.message)
        sessionStorage.setItem('token',res.data.token)
        sessionStorage.setItem('userData',JSON.stringify(res.data.userData))
      }
      if(res.data.userData.role ==='admin')
      {
        navigate('/dashboard')
      }
      else
      {
navigate('/home')
      }
     
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return <>
    <div className='container-fluid' style={{background:"blue",width:"auto",height:"100vh",overflow:"hidden"}}>
      <div className='row'>
      <div className='col-6 p-2'>
        <h2><ImBlogger2 className='icon' />Blogs</h2>
        <div className='heading-singn'>
        <h1 className="text-white fw-bolder mt-5">Hang onto your memories </h1>
        <p className="text-white">
          Save the moments that matter.Blogger lets you safely store thousands
          of posts, photos, and more with Google.
        </p>
      {/* <img src='/image/logo-no-background.png'  style={{width:"100%",borderRadius:"50%",background:"blue",border:"20px solid pink"}}></img> */}
      </div>
      </div>

        <div className='col-5 b-3' style={{padding:"80px"}}>
   
    <Card>
      <Form style=
      {{
      borderRadius:"10px",
      padding:"40px 20px"}}>
         <h2 style={{textAlign:"center",color:"blue"}}>Login Here!</h2>
        <Form.Group className="mb-3" >
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
         </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" style={{marginLeft:"75px"}}  onClick={handleLogin}>
          Submit
        </Button>
        <p>Don't you have account?<a href='/SignUp'>Register </a>Here</p>
      </Form>
      </Card>
      </div>
      {/* <div className=''></div> */}
      </div>
    </div>
  </>
}

export default Signin