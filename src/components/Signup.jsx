import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {toast} from 'react-toastify'
import AxiosService from '../utils/ApiService'
import { useNavigate } from 'react-router-dom';
import Card from "react-bootstrap/Card"


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
    <div className='container' style={{background:""}}>
      <div className='row'>
      <div className='col-6 p-2'>
      {/* <img src='image/avatar.jpg' ></img> */}
          <div>
      <img src='image/avatar.jpg' style={{width:"100%",paddingTop:"80px",borderRadius:"",border:""}}></img> 
      </div>
      </div>
      
     <div className='col-4 b-3 'style={{padding:"10px 0"}}>
    <h3 style={{textAlign:"center",color:"blue",marginRight:"40px"}}>Register Here!</h3>
    <Card style={{width:"300px"}}>
      <Form style={{
        padding:"20px 10px",
       borderRadius:"10px",width:"300px",
      }}>
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
          <Form.Control type="firstname" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
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