import React from "react";
import "../styles/moviedetailscard.css"

function MovieDetailsCard(props){
    return (
        <div className="details-cont">
          <h1 className="details-title">{props.title}</h1>
          <div className="content-wrapper">
            <div className="image-container">
              <img src={`https://image.tmdb.org/t/p/original${props.img}`} className="details-img" alt={props.title} />
            </div>
            <div className="info-container">
              <p className="details-overview">{props.overview}</p>
              <div className="additional-info">
                <h3 className="release">Release Date: {props.release}</h3>
                <h3 className="rating">Rating: {props.rating}</h3>
                <h3 className="budget">Budget: {props.budget}</h3>
                <h3 className="revenue">Revenue: {props.revenue}</h3>
              </div>
            </div>
          </div>
        </div>
      );
}

export default MovieDetailsCard;