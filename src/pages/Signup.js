import React, { useState } from 'react'

export default function Signup() {
  const [data, setData] = useState({})
  
  return (
    <div>
      <form onSubmit={(e)=>{ 
        e.preventDefault();
        console.log(e);
        console.log('DONE...');
        }}>
        <div className='form-group'>
          <label htmlFor='uname'>Username</label>
          <input id='uname' type='text' name='username'></input>
        </div>
        <br/>
        <div className='form-group'>
          <label htmlFor='passwd'>Password</label>
          <input id='paaawd' type='password' name='password'></input>
        </div>
        <br/>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input id='email' type='email' name='email'></input>
        </div>
        <br/>
        <div className='form-group'>
          <label htmlFor='name'>Full name</label>
          <input id='name' type='text' name='name'></input>
        </div>
        <br/>
        <div className='form-group'>
          <input type='submit' name='submit' value='SUBMIT DATA'></input>
        </div>
      </form>
    </div>
  )
}
