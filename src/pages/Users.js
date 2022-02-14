import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import classes from './Users.module.css'


export default function Users() {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        axios.get('https://api.github.com/users')
        .then(res => {
            let data = res.data
            setUsers(data)
            console.log(data);
        })
    }, [])
  return <>
    <div className={classes.users}>
        {users.map(user => (
            <div className={classes.user} key={user.id}>
                <img className={classes.img} alt={user.login} src={user.avatar_url}></img>
                <h3 className={classes.name}>{user.login}</h3>
                <Link className={classes.link} to={user.login}>View More</Link>
            </div>
        ))}
    </div>
  </>;
}
