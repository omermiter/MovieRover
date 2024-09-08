import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Card from "./card";


function SearchResults(){
    
    const {search} = useParams();
    const [movies, setMovies] = useState([]);

    const _key = process.env.REACT_APP_KEY;
    const options = {method: 'GET', headers: {accept: 'application/json'}};
    console.log(search);
    
    
    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${_key}&language=en-US`, options)
        .then(response => response.json())
        .then(response => setMovies(response.results))
        .catch(err => console.error(err));

        
    }, []); 
    

    console.log(movies);
    return (
        <div>
            <Navbar />
            <div className='pop-cont'>
            {movies.map(movie => {
               return <Card title={movie.original_title} overview={movie.overview} identifier={movie.id} img={movie.poster_path}/>
            })}
            </div>
        </div>
    )
};


export default SearchResults;


