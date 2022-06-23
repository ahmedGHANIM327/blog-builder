import Navbar from '../General/Navbar/Navbar'
import Footer from '../General/Footer/Footer';
import SideNavBar from './SideNavBar';
import Section from './Section';
import './Post.css'
import React from 'react'
import { Grid } from '@mui/material';

export default function Post() {
  return (
    <div id="post">
        <div id="navbar">
            <Navbar />
        </div>

        <div id='post-head' className="section bloc-text">
          <div className="bloc-text">
            <h1>
                Fullscreen Overlay Navigation Menu Bar using only HTML & CSS
            </h1>
            <h6>
                Aug 15, 2020 - Ahmed GHANIM
            </h6>
          </div>
        </div>

        <div id="post_bloc" className='section'>
            <Grid container spacing={2}>
                {/* Post Content */ }
                <Grid className='post_content' item md={9}>
                    <Section />
                    <Section />
                    <Section />
                    <Section />
                </Grid>
                {/* Side Nav Bar */ }
                <Grid className='post_sidebar' item md={3}>
                    <SideNavBar />
                </Grid>
            </Grid>
        </div>

        <div id="footer">
            <Footer />
        </div>
    </div>
  )
}