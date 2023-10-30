import React,{useEffect,useState} from 'react'
import AxiosService from '../utils/ApiService'
import useLogout from '../hooks/useLogout'
import BlogTile from './common/BlogTile'
function Home() {
  useEffect(()=>{
    console.log("hellow")
    getBlogs()
  },[])
  let [blogs,setBlogs] = useState([])
  let logout = useLogout()
  let getBlogs = async()=>{
    try {
     let  res= await AxiosService.get('/dashboard')
     if(res.status===200)
     {
      setBlogs(res.data.blogs)
     }
    } catch (error) {
      toast.error(error.response.data.message)
      if(error.response.status===401)
      {
        logout()
      }
    }
    
    
  }
  return <div className='container-fluid'>
  <div className='blogs-wrapper'>
    {
      blogs.map((e)=>{
        return <BlogTile blog={e} key={e._id}/>
      })
    }
  </div>
</div>
}

export default Home