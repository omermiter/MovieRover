import React, {useState, useEffect} from 'react';
import Navbar from "./Navbar";
import Card from './card';
import "../styles/popular.css"


function Popular(){
    
    const [popular, setPopular] = useState([]);
    const _key = process.env.REACT_APP_KEY;
    
    const options = {method: 'GET', headers: {accept: 'application/json'}};
    

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${_key}`, options)
        .then(response => response.json())
        .then(jsonresponse => setPopular(jsonresponse.results))
        .catch(err => console.error(err));

        console.log(popular);
    }, []); 
    
    return (
        <div>
            <Navbar />
            <div className='pop-cont'>
            {popular.map(movie => {
               return <Card title={movie.original_title} overview={movie.overview} identifier={movie.id} img={movie.poster_path}/>
            })}
            </div>
        </div>
    )
}

export default Popular;