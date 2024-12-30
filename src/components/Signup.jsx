import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {toast} from 'react-toastify'
import AxiosService from '../utils/ApiService'
import { useNavigate } from 'react-router-dom';
import Card from "react-bootstrap/Card"
import { ImBlogger2 } from "react-icons/im";


function Signup() {
  let[firstName,setFirstname]=useState("")
  let[lastName,setLastname]=useState("")
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")
  let navigate=useNavigate()

  let  handleLogin = async()=>{
    try {
      let res = await AxiosService.post('/user/signup',{
        firstName,
        lastName,
        email,
        password
      })
      if(res.status===200)
      {
        toast.success(res.data.message)
      
      }
     
      else
      {
navigate('/signin')
      }
     
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return <>
    <div className='container-fliud' style={{background:"blue",width:"auto",height:"100vh",overflow:"hidden"}}>
      <div className='row'>
      <div className='col-6 p-2'>
        <h2 className='icon-1'>< ImBlogger2  className='icon'/>Blogs</h2>
      {/* <img src='image/avatar.jpg' ></img> */}
          <div className='heading-singn'>
          <h1 className="text-white fw-bolder mt-5">Hang onto your memories </h1>
        <p className="text-white">
          Save the moments that matter.Blogger lets you safely store thousands
          of posts, photos, and more with Google.
        </p>
      {/* <img src='image/avatar.jpg' style={{width:"100%",paddingTop:"80px",borderRadius:"",border:""}}></img>  */}
      </div>
      </div>
      
     <div className='col-6 register-form b-3 'style={{padding:"10px 0"}}>
   
    <Card style={{width:"350px"}}>
      <Form style={{
        padding:"40px 30px",
       borderRadius:"10px",width:"300px",
      }}>
          <h3 style={{textAlign:"center",color:"blue",marginRight:"40px"}}>Register Here!</h3>
      <Form.Group className="mb-3" >
          <Form.Label>firstname </Form.Label>
          <Form.Control type="firstname" placeholder="first Name" onChange={(e)=>setFirstname(e.target.value)}/>
         </Form.Group>
      <Form.Group className="mb-3" >
          <Form.Label>lastname</Form.Label>
          <Form.Control type="lastname" placeholder="Last Name" onChange={(e)=>setLastname(e.target.value)}/>
         </Form.Group>
        
        <Form.Group className="mb-3" >
          <Form.Label >email </Form.Label>
          <Form.Control type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
         </Form.Group>
         <Form.Group className="mb-3" >
          <Form.Label>password </Form.Label>
          <Form.Control type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
         </Form.Group>

        <Button variant="primary" style={{marginLeft:"80px"}}  onClick={handleLogin}>
          Submit
        </Button>
        &nbsp;
        <p style={{alignContent:"center"}}>Already have account?<a href='/'>Loging</a>Here</p>
      </Form>
      </Card>
      </div>
      {/* <div className='col-'></div> */}
      </div>
    </div>
  </>
}

export default Signup