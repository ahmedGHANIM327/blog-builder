import React from 'react';
import './Home.css'
import { Grid } from '@mui/material';
import Homeimage from '../Assets/Home-Image-1.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Categories from '../General/Categories/Categories'
import LatestPost from '../General/Posts/PostBloc'
import LatestPosts from '../General/Posts/LatestPosts'
import Writers from '../General/Writers/Writers'
import Navbar from '../General/Navbar/Navbar'
import Footer from '../General/Footer/Footer';

export default function Home() {
  return (
    <div id="Home">
        <div id="navbar">
            <Navbar />
        </div>
        <div id='head' className="section">
            <Grid container spacing={2}>
                <Grid className='bloc-text' item md={6}>
                    <h1>Welcome to <span className='blog-span'>Our Blog</span></h1>
                    <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. 
                       Vestibulum ante ipsum primis in faucibus. Quisque velit nisi,
                       pretium ut lacinia in, elementum id enim.Quisque velit nisi, 
                       pretium ut lacinia in, elementum id enim. 
                       Vestibulum ante ipsum primis in faucibus. Quisque velit nisi,
                       pretium ut lacinia in, elementum id enim.</p>
                    <div className='social-icons'>
                        <InstagramIcon />
                        <FacebookIcon />
                        <PinterestIcon />
                    </div>
                </Grid>
                <Grid className='bloc-image' item md={6}>
                    <img alt='Web developer template using React and Material-UI' title='Web developer template using React and Material-UI' src={Homeimage} />
                </Grid>
            </Grid>
        </div>

        <div id="categories" className="section">
            <h2>Categories</h2>
            <Categories />
        </div>

        <div id="posts" >
            <div className="section">
                <div className="title">
                    <h2>Latest Posts</h2>
                    <button>VIEW ALL POSTS</button>
                </div>
                <LatestPost />
                <LatestPosts />
            </div>
        </div>

        <div id="writers" className="section">
            <h2>Our Writers</h2>
            <Writers />
        </div>

        <div id="footer">
            <Footer />
        </div>
    </div>
  )
}