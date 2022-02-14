import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


export default function Repos() {
    let params = useParams()
    let username = params.username
    let repo_url = `https://api.github.com/users/${username}/repos`
    console.log(repo_url);

    const [repos, setRepos] = useState([])

    useEffect(()=>{
        axios.get(repo_url)
        .then(res=>{
            let data = res.data
            setRepos(data)
            // console.log(data);
        })
    },[])
  return (
    <>
      {repos.map(repo => (
        <div key={repo.id}>
            <h3>{repo.name}</h3>
            <h5>{repo.description}</h5>
        </div>
      ))}
    </>
  )
}
