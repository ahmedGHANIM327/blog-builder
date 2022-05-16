import React from 'react'
import './Categories.css'
import WebCategorie from '../../Assets/web-dev-categorie.png'

export default function CategoriesBloc() {
  return (
    <div className="categorie">
        <img src={WebCategorie} />
        <span className='categorie-divider'></span>
        <h3>WEB DEVELOPMENT</h3>
    </div>
  )
}