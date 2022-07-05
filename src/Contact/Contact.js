import React from 'react'
import Navbar from '../General/Navbar/Navbar'
import Categories from '../General/Categories/Categories'
import Footer from '../General/Footer/Footer';
import './Contact.css'
import { Grid } from '@mui/material';
import TextField from "@mui/material/TextField";
import SendIcon from '@mui/icons-material/Send';
import { useState ,useForm } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useEffect } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

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

  //form values
  const formValues = {
    name : name,
    email : email,
    message : message
  }
  
  // Handle errors
  const [formErrors , setFormErrors] = useState({});

  //handle Submit
  const [isSubmit , setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true)
  }

  useEffect(() => {
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit)
    {
      console.log(formValues)
    }
  },[formErrors])

  // Handle Validation of inputs
  const validate = (values) => {
    const errors = {}
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

    if(!values.name)
    {
      errors.name = "Name is required !"
    }
    if(!values.email)
    {
      errors.email = "Email is required !"
    }
    else if (!emailRegex.test(values.email))
    {
      errors.email = "Not a valid Email format!"
    }

    if(!values.message)
    {
      errors.message = "Message is required !"
    }
    return errors;
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
                <Grid className='bloc_left social-contact' item md={4}>
                  <ul>
                      <li>
                          <a href='tel:+336 74 31 16 24'><LocalPhoneIcon /> +336 74 31 16 24</a>
                      </li>
                      <li>
                          <a href='mailto:contact@ahmed-ghanim.com'><EmailIcon /> contact@ahmed-ghanim.com</a>
                      </li>
                      <li>
                          <a href='https://www.instagram.com/agweb_dev/'><InstagramIcon /> @agweb_dev</a>
                      </li>
                      <li>
                          <a href='https://ahmed-ghanim.com'><LanguageIcon /> ahmed-ghanim.com</a>
                      </li>
                  </ul>
                </Grid>
                <Grid className='bloc_right form-contact' item md={8}>
                    <div>
                    {(Object.keys(formErrors).length === 0 && isSubmit ) ? (<p className='message-success'><CheckCircleOutlineIcon />Message Sent</p>) : (<p></p>)}
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='input1'>
                          <TextField
                              id="standard-name"
                              label="Name"
                              value={name}
                              variant="standard"
                              className='name'
                              onChange={handleChangeName}
                          />
                          <p>{formErrors.name}</p>
                        </div>
                        <div className='input1'>
                          <TextField
                              id="standard-email"
                              label="Email"
                              onChange={handleChangeEmail}
                              type="email"
                              variant="standard"
                              className='email'
                              value={email}
                          />
                          <p>{formErrors.email}</p>
                        </div>
                        <div className='input2'>
                          <TextField
                            id="standard-multiline-message"
                            label="Message"
                            multiline
                            onChange={handleChangeMessage}
                            rows={4}
                            variant="standard"
                            className='message'
                            value={message}
                          />
                          <p>{formErrors.message}</p>
                        </div>
                        <div className="action-send">
                            <button type='submit' value="Submit">Send <SendIcon /></button>
                        </div>
                    </form>
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