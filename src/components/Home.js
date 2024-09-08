import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from 'react';
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import "../styles/Home.css";


function Home(){
    
    
    
    
    return (
        <div>
            <Navbar />
            <div className="searchbar-cont">
                <Searchbar />
            </div> 
        </div>
    )
}

export default Home;