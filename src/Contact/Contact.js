import React from 'react'
import Navbar from '../General/Navbar/Navbar'
import Categories from '../General/Categories/Categories'
import Footer from '../General/Footer/Footer';
import './Contact.css'
import { Grid } from '@mui/material';

export default function Contact() {
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
                    <li>+33674311624</li>
                    <li>contact@ahmed-ghanim.com</li>
                    <li>Toulouse , France</li>
                  </ul>
                </Grid>
                <Grid className='bloc_right' item md={8}>

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