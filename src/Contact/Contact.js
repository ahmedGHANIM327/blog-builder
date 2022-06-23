import React from 'react'
import Navbar from '../General/Navbar/Navbar'
import Categories from '../General/Categories/Categories'
import Footer from '../General/Footer/Footer';
import './Contact.css'
import { Grid } from '@mui/material';
import TextField from "@mui/material/TextField";
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {

  //handle Name change
  const [name,setName] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  //handle Email change
  const [email , setEmail] = useState("");

  const handleChangeEmail = (event) => 
  {
    setEmail(event.target.value);
  }

  //handle Message change
  const [message , setMessage] = useState("");

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  }

  //handle Send Message
  const handleSendMessage = () => {
    console.log("Name :"+name+"/n");
    console.log("Email :"+email+"/n");
    console.log("Message :"+message+"/n");
  }

  return (
    <div id="contact">
        <div id="navbar">
            <Navbar />
        </div>

        <div id='blog-head' className="section bloc-text">
          <div className="bloc-text">
          <h1>Contact <span className='blog-span'>US</span></h1>
          <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. 
              Vestibulum ante ipsum primis in faucibus. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim.Quisque velit nisi, 
              pretium ut lacinia in, elementum id enim. 
              Vestibulum ante ipsum primis in faucibus. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim.Quisque velit nisi, 
              pretium ut lacinia in, elementum id enim. 
              Vestibulum ante ipsum primis in faucibus. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim.</p>
          </div>
        </div>

        <div className="section">
              <Grid container className='bloc_contact' spacing={2}>
                <Grid className='bloc_left' item md={4}>
                  <ul>
                    <li><a href="#"><LocalPhoneIcon />+33674311624</a></li>
                    <li><a href="#"><EmailIcon />contact@ahmed-ghanim.com</a></li>
                    <li><a href="#"><LocationOnIcon />Toulouse , France</a></li>
                    <li className='social-media'>
                      <a href="#"><InstagramIcon /></a>
                      <a href="#"><FacebookIcon /></a>
                      <a href="#"><GitHubIcon /></a>
                    </li>
                  </ul>
                </Grid>
                <Grid className='bloc_right form-contact' item md={8}>
                                <TextField
                                    id="standard-name"
                                    label="Name"
                                    required
                                    variant="standard"
                                    onChange={handleChangeName}
                                    className='input name'
                                    value={name}
                                />
                                <TextField
                                    id="standard-email"
                                    label="Email"
                                    required
                                    onChange={handleChangeEmail}
                                    type="email"
                                    variant="standard"
                                    className='input email'
                                    value={email}
                                />

                                <TextField
                                id="standard-multiline-message"
                                label="Message"
                                multiline
                                onChange={handleChangeMessage}
                                rows={4}
                                variant="standard"
                                className='input message'
                                value={message}
                                />

                                <div className="action-send">
                                    <button onClick={handleSendMessage}>Send <SendIcon /></button>
                                </div>
                </Grid>
              </Grid>
        </div>

        <div id="categories" className="section">
            <h2>Categories</h2>
            <Categories />
        </div>

        <div id="footer">
            <Footer />
        </div>

    </div>
  )
}