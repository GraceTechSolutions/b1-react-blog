import axios from 'axios';
import React, { useState } from 'react'
import swal from 'sweetalert';

const url = 'http://4723-2405-201-4030-e042-41a9-a282-97f3-90fd.ngrok.io';
const endpoint = 'user';

export default function Signup() {
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
      let res_id = res.data.id
      swal({
        title: "Good job!",
        text: `Success.. Your User ID is ${res_id}`,
        icon: "success",
      });
      setData({})
    })
    .catch((err)=>{
      swal({
        title: "Sorry",
        text: "Form not submitted !",
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
          <label htmlFor='email'>Email</label>
          <input onChange={handleChange} required id='email' type='email'value={data.email || ''} name='email'></input>
        </div>
        <br/>
        <div className='form-group'>
          <label htmlFor='name'>Full name</label>
          <input onChange={handleChange} required id='name' type='text'value={data.name || ''} name='name'></input>
        </div>
        <br/>
        <div className='form-group'>
          <input type='submit' name='submit' value='SUBMIT DATA'></input>
        </div>
      </form>
    </div>
  )
}
