import React from 'react'
import './Authentification.css'
import logo from '../Assets/logo.png'
import { useNavigate } from 'react-router-dom';

export default function Authentification() {

  let navigate = useNavigate();
    const backHome = () => {
        navigate("/");
    };

  return (
    <div id="authentification">
        <button className='back_home' onClick={backHome}>Back Home Page</button>
        <div className="connexion">
          <img className='logo' src={logo} width='100px' height='100px' alt="" />
          <form action="submit" className='subscription_form'>
              <input type="email" name="email" id="email" placeholder='Email'/>
              <input type="password" placeholder='Password' />
              <input type="submit" value="Subscribe" />
          </form> 
        </div>
    </div>
  )
}