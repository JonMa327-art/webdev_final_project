import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";

import { useSelector } from 'react-redux';

import '../CSS/create_review.css'
import Pre from '../utils/pre'

const Create_Review = () => {
    const currentUser = useSelector((state) => state.currentUserReducer)

    const OMDB_URL = 'https://www.omdbapi.com/?apikey=8fb7d1cc&s='
    const [movies, setMovies] = useState([])
    const [reviews, setReviews] = useState([])
    const [selectedMovie, setSelectedMovie] = useState(null)
    const [rating, setRating] = useState(1)
    const reviewRef = useRef()
    const titleRef = useRef()

    const searchMoviesByTitle = async () => {
        const response = await axios.get(`${OMDB_URL}=${titleRef.current.value}`)
        setMovies(response.data.Search)
    }

    const handleRating = (e) => {
        setRating(e.target.value)
    }

    const handleReview = async () => {
        const new_review = {
            title: selectedMovie.Title, //titleRef.current.value,
            imdbID: selectedMovie.imdbID,
            review: reviewRef.current.value,
            rating: `${rating}`,
            username: currentUser.username,
        }
        setReviews([...reviews, new_review])
        const response = await axios.post("http://localhost:4000/api/reviews", new_review)
    }

    return (
        <div className="col-12 col-lg-7 col-xl-7">
            <div className="create_review_box">
                <h1 className="create_review_title">Create Review</h1>

                <h2 className="create_review_field_title">Title</h2>

                {/*Search for movie title and display results*/}
                <div>
                    <ul className={"list-group"}>
                        <li className="list-group-item">
                            <button
                                onClick={searchMoviesByTitle}
                                className="btn btn-primary float-end">
                                Search
                            </button>
                            <input ref={titleRef}
                                placeholder="Enter Title"
                                className={"form-control w-75"} />
                        </li>
                        {
                            movies.map(movie =>
                                <li onClick={() => setSelectedMovie(movie)}
                                    className={`list-group-item ${selectedMovie?.imdbID === movie.imdbID && "bg-primary"}`}>
                                    <img src={movie.Poster}
                                        height={100}
                                        className="me-2" />
                                    {movie.Title}
                                </li>
                            )
                        }
                    </ul>
                    {/*<Pre obj={movies}/>*/}
                </div>

                <h2 className="create_review_field_title">Rating</h2>
                <select value={rating}
                    onChange={handleRating}
                    className="dropdown_rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <h2 className="create_review_field_title">Review</h2>
                <textarea ref={reviewRef}
                    className="summary_TA"
                    placeholder="Enter review"></textarea>

                <button disabled={!selectedMovie}
                    onClick={handleReview}
                    className="post_button">Post Review
                </button>
            </div>
        </div>
    )
}

export default Create_Review;