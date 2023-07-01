import React from 'react'
import { Button } from '@mui/material';
import "./Book.css"
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from 'react';

const Book = (props) => {
  const history = useNavigate();
  
  const [del ,setdel] = useState(0);
  useEffect(()=>{
   
        },[del]);
    const {_id,name,author,description,price,image}=props.book;
    const deleteHandler=async()=>{
      console.log("delete ke andar hu")
     await axios.delete(`http://localhost:5000/books/${_id}`).then((res)=>res.data).then(()=>setdel(1));
    }
    console.log("adarsh in book")
   
  return (
    <div className="card">
      <img src = {image} alt ={name}/>
      <article> By {author}</article>
      <h3> {name}</h3>
      <p>{description}</p>
      <h3> RS {price}</h3>
      <Button LinkComponent={Link} to ={`/books/${_id}`} sx={{mt:"auto"}}>update</Button>
      <Button color ="error" onClick={deleteHandler}sx={{mt:"auto"}}> delete</Button>
    </div>
  )
}

export default Book
