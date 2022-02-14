import React, { useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import classes from './User.module.css'
import axios from 'axios';

let url = 'https://api.github.com/users/'

export default function User() {
    const [user, setUser] = useState({})
    let params = useParams()
    let username = params.username
    
    useState(()=>{
      axios.get(`${url}${username}`)
      .then(res => {
        let data = res.data
        setUser(data)
        console.log(user);
      })
    }, [])
    let repo_url = `/repos/${username}`
    
    // console.log(username);
  return <div className={classes.main}>
      <img src={user.avatar_url} className={classes.image}></img>
      <div className={classes.data}> 
        <h1>{user.name}</h1>
        <h3>{user.location}</h3>
        <div className={classes.details}>
            <h4>Repos <span>{user.public_repos}</span></h4>
            <h4>Gists <span>{user.public_gists}</span></h4>
            <h4>Followers <span>{user.followers}</span></h4>
            <h4>Following<span>{user.following}</span></h4>
        </div>
        <a className={classes.link} href={user.blog} target='_blank'>View Blogs</a>
        <Link to={repo_url}>Repos</Link>
      </div>
  </div>;
}
