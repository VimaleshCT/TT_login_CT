import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './Fac_login.css';
import './For_pass.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const Fac_login = () => {


  const [LoginData,setLoginData] = useState({
        id : '',
        email : '',
        password : ''
  });

  const handlechange = (e)=>{
    setLoginData({
      ...LoginData,
      [e.target.name]: e.target.value
    })
  }

  const subform =async()=>{
    // e.preventDefault()
    console.log(LoginData)

     await Axios.post('http://localhost:3000/Fac_login',LoginData).then(
      res => {
        console.log(res)
      }
    ).catch(err => {console.log(err)})
  }
  

  // const [id,setId] = useState('')
  // const [email,setEmail] = useState('')
  // const [pass,setPass] = useState('')

  // const hansub = ()=>{
  //   const data = {
  //     Id : id,
  //     Email : email,
  //     Pass : pass
  //   }
  //   console.log(data)

   

  
  
  return (
    <div className='container'>
          <div className='header'>
              <div className='text'>Login</div>
              <div className='underline'></div>
            </div>
            <div className='inputs'>
              <div className='input'>
                <img src={user_icon} alt="" />
                <input type="id" name='id' placeholder='ID' value={LoginData.id}
                  onChange={handlechange} />
              </div>
              <div className='input'>
                <img src={email_icon} alt="" />
                <input type="email" name="email" placeholder='Email' value={LoginData.email}
                  onChange={handlechange} />
              </div>
              <div className='input'>
                <img src={password_icon} alt="" />
                <input type="password" name ="password" placeholder='Password' value={LoginData.password}
                  onChange={handlechange} />
              </div>
            </div>

            <div classname="forgot-password" style={{ marginLeft: "6rem", marginTop: "1rem" }}><Link to='/For_pass'>Forgot Password?<span>Click Here!</span></Link></div>

            <div className='submit-container'></div>
          
            <button className='submit' onClick={subform}>Login</button>
        
      
    </div>

  )
}

export default Fac_login
