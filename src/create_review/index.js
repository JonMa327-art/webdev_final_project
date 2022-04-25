import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";

import '../CSS/create_review.css'
import Pre from '../utils/pre'

const Create_Review = () => {
    const [movies, setMovies] = useState([])
    const titleRef = useRef()
    const OMDB_URL = 'https://www.omdbapi.com/?apikey=8fb7d1cc&s='
    const searchMoviesByTitle = async () => {
        const response = await axios.get(`${OMDB_URL}=${titleRef.current.value}`)
        setMovies(response.data.Search)
    }
    return (
        <div className="col-10 col-lg-7 col-xl-7">
            <div className="create_review_box">
                <h1 className="create_review_title">Create Review</h1>

                <h2 className="create_review_field_title">Title</h2>

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
                                   className={"form-control w-75"}/>
                        </li>
                        {
                            movies.map(movie =>
                                <li className="list-group-item">
                                    <img src={movie.Poster}
                                         height={100}
                                         className="me-2"/>
                                    {movie.Title}
                                </li>
                            )
                        }
                    </ul>
                    {/*<Pre obj={movies}/>*/}
                </div>

                {/*<div>*/}
                {/*    <h1>Omdb Search</h1>*/}
                {/*    {profile.email}*/}
                {/*    <ul className="list-group">*/}
                {/*        <li className="list-group-item">*/}
                {/*            <button*/}
                {/*                onClick={searchByTitle}*/}
                {/*                className="btn btn-primary float-end">Search</button>*/}
                {/*            <input*/}
                {/*                ref={titleSearchRef}*/}
                {/*                className="form-control w-75"/>*/}
                {/*        </li>*/}
                {/*        {*/}
                {/*            movies.map(movie =>*/}
                {/*                <li className="list-group-item">*/}
                {/*                    <Link to={`/details/${movie.imdbID}`}>*/}
                {/*                        <img src={movie.Poster} className="me-2" height={30}/>*/}
                {/*                        {movie.Title}*/}
                {/*                    </Link>*/}
                {/*                </li>*/}
                {/*            )*/}
                {/*        }*/}
                {/*    </ul>*/}
                {/*    <Preformatted obj={movies}/>*/}
                {/*</div>*/}

                <h2 className="create_review_field_title">Rating</h2>
                <select className="dropdown_rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <h2 className="create_review_field_title">Review</h2>
                <textarea className="summary_TA"
                          placeholder="Enter review"></textarea>

                <button className="post_button">Post Review</button>
            </div>
        </div>
    )
}

export default Create_Review;