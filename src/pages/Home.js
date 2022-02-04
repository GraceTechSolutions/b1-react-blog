import React, { useEffect, useState } from 'react';
import axios from 'axios';


let userUrl = 'https://jsonplaceholder.typicode.com/users'

export default function Home() {
    let [users, setUsers] = useState([])    
    useEffect(()=>{
        const getdata = async () =>{
            let response = await axios.get(userUrl)
            let data = await response.data
            console.log(response);
            console.log(data);
            setUsers(data)
        }
        getdata()
    }, [])
    
  return <div>
      {
          users.map(user => (
              <h1 key={user.id}>{user.id}| {user.name}</h1>
          ))
      }
  </div>;
}
