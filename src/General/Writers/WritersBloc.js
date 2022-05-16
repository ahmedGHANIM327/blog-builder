import React from 'react'
import './Writers.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Member1 from '../../Assets/Member1.jpg'
import Member2 from '../../Assets/Member2.jpg'
import Member3 from '../../Assets/Member3.png'

export default function WritersBloc(props) {

    const writers = {
        "1" : {
            name : "Ahmed ALAMI",
            description : `Consectetuer adipiscing elit, 
                            sed diam nonummy nibh euismod 
                            tincidunt ut laoreet dolore magna
                            aliquam erat. Lorem ipsum dolor 
                            sit amet consectet.`,
            image : Member1,
        },
        "2" : {
            name : "Omar Nadir",
            description : `Consectetuer adipiscing elit, 
                            sed diam nonummy nibh euismod 
                            tincidunt ut laoreet dolore magna
                            aliquam erat. Lorem ipsum dolor 
                            sit amet consectet.`,
            image : Member2,
        },
        "3" : {
            name : "Khaled MAHER",
            description : `Consectetuer adipiscing elit, 
                            sed diam nonummy nibh euismod 
                            tincidunt ut laoreet dolore magna
                            aliquam erat. Lorem ipsum dolor 
                            sit amet consectet.`,
            image : Member3,
        }
    }

    const writer_id = props.id;

  return (
    <div className="writer">
        <div className="front">
            <img src={writers[writer_id].image} />
        </div>
        <div className="back">
            <h1>{writers[writer_id].name}</h1>
            <p>
                {writers[writer_id].description}
            </p>
            <div className="social-media">
                <InstagramIcon />
                <LinkedInIcon />
                <PinterestIcon />
            </div>
        </div>
    </div>
  )
}