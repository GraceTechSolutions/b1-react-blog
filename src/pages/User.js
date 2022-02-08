import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import classes from './User.module.css'
import axios from 'axios';

let data = {
    "login": "mojombo",
    "id": 1,
    "node_id": "MDQ6VXNlcjE=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mojombo",
    "html_url": "https://github.com/mojombo",
    "followers_url": "https://api.github.com/users/mojombo/followers",
    "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
    "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
    "organizations_url": "https://api.github.com/users/mojombo/orgs",
    "repos_url": "https://api.github.com/users/mojombo/repos",
    "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mojombo/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Tom Preston-Werner",
    "company": "@chatterbugapp, @redwoodjs, @preston-werner-ventures ",
    "blog": "http://tom.preston-werner.com",
    "location": "San Francisco",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": "mojombo",
    "public_repos": 63,
    "public_gists": 62,
    "followers": 22825,
    "following": 11,
    "created_at": "2007-10-20T05:24:19Z",
    "updated_at": "2022-02-07T23:26:09Z"
  }
  
let url = 'https://api.github.com/users/'

export default function User() {
    const [user, setUser] = useState(data)
    let params = useParams()
    let username = params.username
    console.log(username);
  return <div className={classes.main}>
      <img src={user.avatar_url} className='image'></img>
      <h1>{user.name}</h1>
      <h3>{user.location}</h3>
      <div className={classes.details}>
          <h4>Repos <span>{user.public_repos}</span></h4>
          <h4>Gists <span>{user.public_gists}</span></h4>
          <h4>Followers <span>{user.followers}</span></h4>
          <h4>Following<span>{user.following}</span></h4>
      </div>
  </div>;
}
