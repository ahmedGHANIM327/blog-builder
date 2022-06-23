import React from 'react'
import './Posts.css'
import { useNavigate } from "react-router-dom";


export default function PostBloc() {

    let navigate = useNavigate();
    const openPost = () => {
        navigate("/post");
    };
    
  return (
    <div className="postbloc">
        <div className="top">
            <h4>
            Fullscreen Overlay Navigation Menu Bar using only HTML & CSS
            </h4>
        </div>
        <div className="bottom">
            <h6>Aug 15, 2020 - Ahmed GHANIM</h6>
            <p>
                Lorem Ipsum est un générateur de 
                faux textes aléatoires. Vous choisissez 
                le nombre de paragraphes, de mots ou de listes. 
                Vous obtenez alors un texte aléatoire que 
                vous pourrez ensuite utiliser librement 
                dans vos maquettes. Lorem Ipsum est un générateur de 
                faux textes aléatoires. Vous choisissez 
                le nombre de paragraphes, de mots ou de listes. 
                Vous obtenez alors un texte aléatoire que 
                vous pourrez ensuite utiliser librement 
                dans vos maquettes...
            </p>
            <div className="actions">
                <div className="postcategories">
                    <ul>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <button onClick={openPost}>Read More</button>
            </div>
        </div>
    </div>
  )
}