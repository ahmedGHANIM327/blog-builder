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
                    <li>Toulouse , France</li>
                    <li className='social-media'>
                      <a href="#"><InstagramIcon /></a>
                      <a href="#"><FacebookIcon /></a>
                    </li>
                  </ul>
                </Grid>
                <Grid className='bloc_right form-contact' item md={8}>
                                <TextField
                                    id="standard-name"
                                    label="Name"
                                    required
                                    variant="standard"
                                    onClick={handleChangeName}
                                    className='input name'
                                />
                                <TextField
                                    id="standard-email"
                                    label="Email"
                                    required
                                    onClick={handleChangeEmail}
                                    type="email"
                                    variant="standard"
                                    className='input email'
                                />

                                <TextField
                                id="standard-multiline-message"
                                label="Message"
                                multiline
                                onClick={handleChangeMessage}
                                rows={4}
                                variant="standard"
                                className='input message'
                                />

                                <div className="action-send">
                                    <button>Send <SendIcon /></button>
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