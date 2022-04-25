import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Pre from '../utils/pre'

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({})
    const OMDB_URL = 'https://www.omdbapi.com/?apikey=8fb7d1cc&i'
    const {imdbID} = useParams()
    const fetchMovieByImdbID = async () => {
        const response = await axios(`${OMDB_URL}=${imdbID}`)
        setMovieDetails(response.data)
    }
    useEffect(() => {
        fetchMovieByImdbID()
    }, [])
    return (
        // Displays Title, Poster, and Director
        <div>
            <h1>{movieDetails.Title}</h1>
            <p>
                <img src={movieDetails.Poster}
                     height={100}
                     className="float-start me-2"/>
                <b>Director: {movieDetails.Director} </b>
                <br/>
                {movieDetails.Plot}
            </p>
            {/*<Pre obj={movieDetails}/>*/}
        </div>
    )
}

export default MovieDetails
