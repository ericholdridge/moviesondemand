import React, { useState, createContext, useEffect } from "react";
import Axios from 'axios'

export const MovieContext = createContext();

export const MovieState = ({ children }) => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const API_KEY = '57f65183575e8374ca2935e492541b4e';
    const popularMoviesAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    // Display popular movies when user loads page
    useEffect(() => {
        Axios(popularMoviesAPI).then(({ data }) => {
            const response = data.results;
            setPopularMovies(response);
        })
    }, []);

    const handleMovieSearch = (e) => {
        e.preventDefault();
        // Fetch data from the api
        const API_KEY = '57f65183575e8374ca2935e492541b4e';
        const searchAPI = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${inputValue}&page=1&include_adult=true`
        Axios(searchAPI).then(({ data }) => {
            const results = data.results;
            setPopularMovies(results)
        })
    }

    return (
        <MovieContext.Provider value={{ popularMovies, setPopularMovies, inputValue, setInputValue, handleMovieSearch }}>
            {children}
        </MovieContext.Provider>
    );
};