import React from 'react';
import "../styles/card.css";
import { Link } from "react-router-dom";
import "../styles/card.css";

function Card(props){
    return (
        <Link to={`/popular/${props.identifier}`} className='link-styles'>
            <div className='card-container' key={props.identifier}>
                <h1 className='title'>{props.title}</h1>
                <img src={`https://image.tmdb.org/t/p/original${props.img}`} className='card-img'/>
                <p className='overview'>{props.overview}</p>
            </div>
        </Link>
    )
};

export default Card;