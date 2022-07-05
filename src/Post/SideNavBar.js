import React from 'react'
import LatestPosts from '../General/Posts/LatestPosts'
import Categories from '../General/Categories/Categories'
import './Post.css'
export default function SideNavBar() {
  return (
    <div id="sidebar">
      <LatestPosts />
      <Categories />
    </div>
  )
}