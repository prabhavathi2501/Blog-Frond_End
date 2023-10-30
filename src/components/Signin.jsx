import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {toast} from 'react-toastify'
import AxiosService from '../utils/ApiService'
import { useNavigate } from 'react-router-dom';


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
    <div className='container'>
      <div className='row'>
      <div className='col-3 p-2'>
        <div >
      <img src=' '></img></div>
      </div>
        <div className='col-5 b-3'>
    <h1 style={{textAlign:"center"}}>Login Here!</h1>
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
         </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary"  onClick={handleLogin}>
          Submit
        </Button>
      </Form>
      </div>
      <div className='col-2'></div>
      </div>
    </div>
  </>
}

export default Signin