import React, { useRef, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

//import css 
import '../CSS/home.css'
import axios from "axios";

import {useDispatch, useSelector} from "react-redux";
import {getCurrentUser} from "../action/user_action";
import {findAllReviews} from "../service/review_service";

//Home Component
const Home = () => {

    const currentUser = useSelector((state) => (state.currentUserReducer))
    // console.log(currentUser)

    const dispatch = useDispatch()

    const [movies, setMovies] = useState([])
    const [reviews, setReviews] = useState([])
    const {searchString} = useParams()

    const titleRef = useRef()
    const OMDB_URL = 'https://www.omdbapi.com/?apikey=8fb7d1cc&s'

    const searchMoviesByTitle = async () => {
        const response = await axios.get(`${OMDB_URL}=${titleRef.current.value}`)
        setMovies(response.data.Search)
    }
    
    const getReviews = async () => {
        const allReviews = await findAllReviews()
        const movieReviews = allReviews.filter(r => r.username != currentUser?.username)
        setReviews(movieReviews)
    }
    
    useEffect(() => {
        getReviews()
    }, [currentUser])

    return (
        <div className="col-12 col-lg-7 col-xl-7">
            {/* search bar */}
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
                            <li className="list-group-item">
                                <Link to={`/details/${movie.imdbID}`}>
                                    <img src={movie.Poster}
                                        height={100}
                                        className="me-2" />
                                    {movie.Title}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>

            {/*Home page reviews*/}
            <h1>See More Reviews</h1>
            <ul className="game_reviews list-group">
                {
                    reviews.map(review =>
                        <li className="list-group-item">
                            <h5>{review.title}</h5>
                            <b>Author: </b>{review.username}<br/>
                            <b>Rating: </b>{review.rating}<br/>
                            <b>Review: </b>{review.review}<br/>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Home