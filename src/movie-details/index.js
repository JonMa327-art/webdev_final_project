import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {findAllReviews} from "../service/review_service";

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({})
    const [reviews, setReviews] = useState([])
    const {imdbID} = useParams()
    const OMDB_URL = 'https://www.omdbapi.com/?apikey=8fb7d1cc&i'

    const fetchMovieByImdbID = async () => {
        const response = await axios(`${OMDB_URL}=${imdbID}`)
        setMovieDetails(response.data)
    }

    const getReviewsByImdbID = async (imdbID) => {
        const allReviews = await findAllReviews()
        const movieReviews = allReviews.filter(r => r.imdbID == imdbID)
        setReviews(movieReviews)
    }

    useEffect(() => {
        fetchMovieByImdbID()
        getReviewsByImdbID(imdbID)
    }, [])

    return (
        <div>
            {/*Displays Title, Poster, and Director*/}
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
            </div>
            <br/>
            <br/>

            {/*Displays Reviews for this movie*/}
            <div>
                <h2>Reviews</h2>
                <ul className="list-group">
                    {
                        reviews.map(review =>
                            <li className="list-group-item">
                                <b>Author: </b>{review.username}<br/>
                                <b>Rating: </b>{review.rating}<br/>
                                <b>Review: </b>{review.review}<br/>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default MovieDetails
