import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BiSolidLike } from "react-icons/bi";
import { MdOutlineInsertComment } from "react-icons/md";


function BlogTile({blog}) {
  return <>
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={blog.imageUrl} />
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>
          {blog.description}
        </Card.Text>
      </Card.Body>
   
      <div className='like-btn'>
      <p style={{color:"blue",fontSize:"10px",paddingBottom:"11px"}}> {blog.createdAt}</p> 
      <span ><BiSolidLike /></span>
      <span><MdOutlineInsertComment /></span>
     </div>
    </Card>
  </>
}

export default BlogTile