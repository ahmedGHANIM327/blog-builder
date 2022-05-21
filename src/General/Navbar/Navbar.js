import React ,{useState, useEffect} from 'react'
import logo from '../../Assets/logo.png'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from 'react-router-dom'

export default function Navbar() {

  const [toggleMenu,setToggleMenu] = useState(false);
    const [largeur,setLargeur] = useState(window.innerWidth);

    const handleClick = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        const location = document.querySelector(target).offsetTop;

        window.scrollTo({
            left:0,
            top:location-70,
        })

        setToggleMenu(false);
    }

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeLargeur = () => {
            setLargeur(window.innerWidth);
        }

        window.addEventListener('resize' , changeLargeur);

        return () =>
        {
            window.removeEventListener('resize',changeLargeur);
        }
    }, [])

  return (
    <div className="navbar">
        <img className='logo' src={logo} alt="" />
        {(toggleMenu || largeur>1000) && (
        <div className="navigation">
          <ul>
              <li><NavLink to="/" className={({isActive}) => { return isActive ? "activLink" : ""}}>HOME</NavLink></li>
              <li><NavLink to="/blog" className={({isActive}) => { return isActive ? "activLink" : ""}}>BLOG</NavLink></li>
              <li><NavLink to="/contact" className={({isActive}) => { return isActive ? "activLink" : ""}}>CONTACT</NavLink></li>
          </ul>
          <button ><NavLink to="/auth">Connexion</NavLink></button>
        </div>
        )}
        <MenuIcon className='toggle' onClick={toggleNav}/>
    </div>
  )
}