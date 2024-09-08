import React, {useEffect, useState} from 'react';
import Navbar from './Navbar';
import { useParams } from "react-router-dom";
import MovieDetailsCard from './MovieDetailCard';
import "../styles/moviedetails.css"

function MovieDetails(){

    const {id} = useParams();
    const [movie, setMovie] = useState({});

    const _key = process.env.REACT_APP_KEY;
    
    const options = {method: 'GET', headers: {accept: 'application/json'}};
    

    useEffect(() => {

        console.log(id);
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${_key}&language=en-US`, options)
        .then(response => response.json())
        .then(response => setMovie(response))
        .catch(err => console.error(err));

        
    }, []); 

    console.log(movie);


    return (
        <div>
            <Navbar />
            <div className='card-details-cont'>
                <MovieDetailsCard title={movie.original_title} budget={movie.budget} release={movie.release_date} revenue={movie.revenue} rating={movie.vote_average} overview={movie.overview} img={movie.poster_path}/>
            </div>
        </div>
    )    
}


export default MovieDetails;