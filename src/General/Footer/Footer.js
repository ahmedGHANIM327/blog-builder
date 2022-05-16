import React from 'react'
import './Footer.css'
import logo from '../../Assets/logo.png'
import { Grid } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function Footer() {
  return (
    <div className="footer">
        <div className="subscription">
        <h2>Finding this site helpful?</h2>
        <h5>There’s more coming for our subscribers!</h5>
        <form action="" className='subscription_form'>
            <input type="text" placeholder='Name'/>
            <input type="email" name="email" id="email" placeholder='Email'/>
            <input type="submit" value="Subscribe" />
        </form>   
        </div>
        <div className="bottom_bloc">
            <h6>
            If you have any questions or would like to discuss,
            feel free to get in touch.
            </h6>
            <Grid container spacing={2}>
                <Grid className='left_bloc' item md={8}>
                    <img src={logo} alt="" />
                    <p>
                    Lorem Ipsum est un générateur de faux textes 
                    aléatoires. Vous choisissez le nombre de paragraphes, 
                    de mots ou de listes. Vous obtenez alors un texte 
                    aléatoire que vous pourrez ensuite utiliser librement 
                    dans vos maquettes.
                    </p>
                </Grid>
                <Grid className='right_bloc' item md={4}>
                    <ul>
                        <li><ArrowRightIcon sx={{ fontSize: 40 }}/> ALL POSTS</li>
                        <li><ArrowRightIcon sx={{ fontSize: 40 }}/> ALL CATEGORIES</li>
                        <li><ArrowRightIcon sx={{ fontSize: 40 }}/> ALL WRITERS</li>
                    </ul>
                </Grid>
            </Grid>
            <span className="footer_divider"></span>
            <div className="copyright">
                © AHMED GHANIM | Privacy Policy | Terms and Conditions | Sitemap
            </div>
        </div>
    </div>
  )
}