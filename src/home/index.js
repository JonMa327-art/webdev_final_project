import React, { useRef, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

//import css 
import '../CSS/home.css'
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import { getCurrentUser } from "../action/user_action";

//Home Component
const Home = () => {
    const [movies, setMovies] = useState([])
    const { searchString } = useParams()
    const titleRef = useRef()
    const OMDB_URL = 'https://www.omdbapi.com/?apikey=8fb7d1cc&s'
    const searchMoviesByTitle = async () => {
        const response = await axios.get(`${OMDB_URL}=${titleRef.current.value}`)
        setMovies(response.data.Search)
    }

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


            {/* List of results. Will refactor later but for now I will just layout the html here*/}
            <ul className="game_reviews">
                <li className="game">
                    {/* <img src="images/game_image_test.jpeg" className="game_image" /> */}

                    <div className="game_details">
                        <h1 className="game_title">Movie title</h1>
                        <p className="game_reviewer_author">author</p>
                        <p className="game_rating">rating 98 x 160</p>
                        <p className="game_review_summary">List layout the html hereList of results. Will refactor later
                            but for now I will just layout the html hereList of results. Will refactor later but for now
                            I will just layout the html hereList of results. Will refactor later but for now I will just
                            layout the html here</p>
                        <button className="view_review_button">View Review</button>
                    </div>
                </li>
                <li className="game">
                    {/* <img src="images/game_image_test.jpeg" className="game_image" /> */}
                    <div className="game_details">
                        <h1 className="game_title">Movie title</h1>
                        <p className="game_reviewer_author">author</p>
                        <p className="game_rating">rating 98 x 160</p>
                        <p className="game_review_summary">List layout the html hereList of results. Will refactor later
                            but for now I will just layout the html hereList of results. Will refactor later but for now
                            I will just layout the html hereList of results. Will refactor later but for now I will just
                            layout the html here</p>
                        <button className="view_review_button">View Review</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Home