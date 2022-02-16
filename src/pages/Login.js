import axios from 'axios';
import React, { useState } from 'react'
import swal from 'sweetalert';

const url = 'http://4723-2405-201-4030-e042-41a9-a282-97f3-90fd.ngrok.io';
const endpoint = 'login';


export default function Login() {
  const [data, setData] = useState({})
  
  const handleChange = (e) => {
    // console.log(e);
    const name = e.target.name
    const value = e.target.value
    setData(values =>({...values, [name]:value}))
  }
  
  const submitForm = (e) => {
    e.preventDefault();
    axios.post(`${url}/${endpoint}`, data)
    .then((res)=>{
      let res_status = res.data.ok;
      if (res_status) {
        let res_id = res.data.key
        swal({
          title: "Good job!",
          text: `Success.. Your Tocken IS\n ${res_id}`,
          icon: "success",
        });
        setData({})
      } else {
        let err_msg = res.data.msg
        swal({
          title: "Sorry",
          text: err_msg,
          icon: "error",
        });
      }
    })
    .catch((err)=>{
      swal({
        title: "Sorry",
        text: "Something Went",
        icon: "error",
      });
      console.log(err);
    })
  }
  return (
    <div>
      <form onSubmit={submitForm}>
        <div className='form-group'>
          <label htmlFor='uname'>Username</label>
          <input onChange={handleChange} required id='uname' type='text'value={data.username || ''} name='username'></input>
        </div>
        <br/>
        <div className='form-group'>
          <label htmlFor='passwd'>Password</label>
          <input onChange={handleChange} required id='paaawd' type='password'value={data.password || ''} name='password'></input>
        </div>
        <br/>
        <div className='form-group'>
          <input type='submit' name='submit' value='SUBMIT DATA'></input>
        </div>
      </form>
    </div>
  )
}


// JWT Json Web Token

// Signup
// Login

// Home => Popular Blogs 3 cols 2 rows | image left right | footer 3 clos 4 rows

// Blogs => 3 cols 6 rows
// blog view => header image content
