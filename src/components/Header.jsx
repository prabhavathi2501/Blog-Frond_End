import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
 import useLogout from '../hooks/useLogout';
import { useEffect,useState} from 'react';
import { Button } from 'react-bootstrap';


function Header() {
  let userData = JSON.parse(sessionStorage.getItem('userData'))
    let navigate = useNavigate()
     let [role,setRole] = useState("")
     let logout = useLogout()

    useEffect(()=>{
        if(!userData)
        {
             logout()
        }
        else
        {
             setRole(userData.role)
        }
    },[])
  return (
    <Navbar expand="lg" className="bg-primary ">
      <Container>
        <Navbar.Brand >Blog App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto header-nav-items  cursor-pointer">
          {
             role==="admin"?<AdminNavLinks/>:<UserNavLinks/>
            }
          </Nav>
          <Nav>
          <Nav.Item style={{alignContent:"center"}}><h4>{`${userData.firstName} ${userData.lastName}`}</h4></Nav.Item>
            &nbsp;
            &nbsp;
            &nbsp;
          <Nav.Item onClick={logout} ><Button variant='danger'>Logout</Button></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
function AdminNavLinks(){
  let navigate = useNavigate()
  let logout = useLogout()
  return <>
          <Nav.Item onClick={()=>navigate('/dashboard')}>Dashboard</Nav.Item>
  </>
}
function UserNavLinks(){
  let navigate = useNavigate()
 let logout = useLogout()
   return <>
    
            <Nav.Item onClick={()=>navigate('/home')}>Home</Nav.Item>
            <Nav.Item onClick={()=>navigate('/dashboard')}>Dashboard</Nav.Item>
            <Nav.Item onClick={()=>navigate('/create')}>Create</Nav.Item>
            {/* <Nav.Item onClick={()=>navigate('/logout')}><Button variant='danger'>Logout</Button></Nav.Item> */}
            
    </>
}


export default Header;