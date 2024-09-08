import React , { useState }from 'react';
import "../styles/Searchbar.css";
import { Link } from "react-router-dom";

function Searchbar(props){

    const [value, setValue] = useState('');


    const changeValue = (e) => {
        console.log(e.target.value.toLowerCase());
        setValue(e.target.value.toLowerCase());
    }

    return (
        <div className="search-container">
          <input 
            type='text' 
            name='search' 
            onChange={changeValue} 
            placeholder='Search Movies Here' 
            className="search-input"
          />
          <Link 
            to={`/results/${value}`} 
            data={value} 
            className="search-button link-styles"
          >
            Search
          </Link>
        </div>
      );
}

export default Searchbar;