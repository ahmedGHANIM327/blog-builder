import React, { useState } from 'react'
import Navbar from '../General/Navbar/Navbar'
import './Blog.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PostBloc from '../General/Posts/PostBloc';
import Pagination from '@mui/material/Pagination';
import Footer from '../General/Footer/Footer';

export default function Blog() {

  const [categorie , setCategorie] = useState('ALL');
  const handleCategories = (e) => {
    setCategorie(e.target.value);
  }

  const [page, setPage] = useState(1);
  const handlePages = (event, value) => {
    setPage(value);
  };

  return (
    <div id="Blog">
        <div id="navbar">
            <Navbar />
        </div>
        <div id='blog-head' className="section bloc-text">
          <div className="bloc-text">
          <h1>Welcome to <span className='blog-span'>The world of Tech</span></h1>
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

        <div className="blog-posts section">
          <div className="top">
            <h2>All Posts</h2>
            <div className="right">
            <FormControl className='form-select'>
              <InputLabel id="select-label-categorie">Categories</InputLabel>
              <Select
                labelId="select-label-categorie"
                id="select-label-categorie"
                value={categorie}
                label="Categories"
                onChange={handleCategories}
              >
                <MenuItem value={'all'}>All</MenuItem>
                <MenuItem value={'mobile'}>Web Dev</MenuItem>
                <MenuItem value={'web'}>Mobile Dev</MenuItem>
              </Select>
            </FormControl>
            </div>
          </div>
          <div className="posts">
            <PostBloc />
            <PostBloc />
            <PostBloc />
            <PostBloc />
            <PostBloc />
          </div>
          <div className="pagination">
            <Pagination count={10} page={page} onChange={handlePages}/>
          </div>
        </div>

        <div id="footer">
            <Footer />
        </div>
    </div>
  )
}