import React, { useState, useEffect } from 'react';
import classes from './scss/Blogs.module.scss'
import Card from './Card';
import axios from 'axios';

const postUrl = 'https://jsonplaceholder.typicode.com/posts'
let userUrl = 'https://jsonplaceholder.typicode.com/users'

// let res = await fetch(url)
// let data = await res.json()

export default function Blogs() {
    const [blogs, setBlogs] = useState([])
    const [users, setUsers] = useState([])
    useEffect(()=>{
      const loaddata = async () => {
        let blogResponse = await axios.get(postUrl)
        let userResponse = await axios.get(userUrl)
        let userData = await userResponse.data
        let blogData = await blogResponse.data
        setUsers(userData)
        setBlogs(blogData)
      }
      loaddata();
    }, [])

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
