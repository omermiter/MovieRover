import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./Home";
import Popular from "./Popular";
import MovieDetails from "./moviedetails";
import SearchResults from "./SearchResults";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="popular" element = {<Popular />}/>
        <Route path="popular/:id" element={<MovieDetails />}/>
        <Route path="results/:search" element={<SearchResults />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
