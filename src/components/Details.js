import React, { useState, useEffect } from 'react';
import classes from './scss/Details.module.scss';
import {useParams} from 'react-router-dom'
import axios from 'axios';


const postUrl = 'https://jsonplaceholder.typicode.com/posts'
let userUrl = 'https://jsonplaceholder.typicode.com/users'


export default function Details() {
  const [blog, setBlog] = useState({})
  const [users, setUsers] = useState([])
  let params = useParams();
  useEffect(()=>{
    axios.get(`${postUrl}/${params.blogId}`)
    .then(res => {
      let data = res.data
      // console.log(data);
      setBlog(data)
    })
    axios.get(userUrl)
    .then(res => {
      let data = res.data
      // console.log(data);
      setUsers(data)
    })
  }, [])
  console.log(params);
  console.log(blog);
  let user = users[blog.userId-1]
  console.log(user);
  return <div className={classes.container}>
  <h2 className={classes.title}>{blog.title}</h2>
  <hr/>
  <div className={classes.padding}>
      <h4 className={classes.subtitle}>{blog.title}</h4>
      <p className={classes.username}>raj</p>
      <p className={classes.content}>{blog.body} {blog.body} {blog.body} {blog.body} {blog.body} {blog.body} {blog.body}</p>
  </div>
</div>;
}