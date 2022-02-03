import React, { useState, useEffect } from 'react';
import classes from './scss/Blogs.module.scss'
import Card from './Card';
import axios from 'axios';

const postUrl = 'https://jsonplaceholder.typicode.com/posts'
let userUrl = 'https://jsonplaceholder.typicode.com/users'


export default function Blogs() {
    const [blogs, setBlogs] = useState([])
    const [users, setUsers] = useState([])
    useEffect(()=>{
      axios.get(postUrl)
      .then(res => {
        let data = res.data
        // console.log(data);
        setBlogs(data)
      })
      axios.get(userUrl)
      .then(res => {
        let data = res.data
        // console.log(data);
        setUsers(data)
      })
    }, [blogs, users])

    // useEffect(fun)
    // useEffect(fun, [])
    // useEffect(fun, [n, x])

    let blog_list = blogs.map((blog)=>(
      <Card blog={blog} key={blog.id} user={users[blog.userId-1]}/>
    ))
  return(
      <div className={classes.container}>
          <div className={classes.grid}>
            {blog_list}
          </div>
      </div>
  );
}
