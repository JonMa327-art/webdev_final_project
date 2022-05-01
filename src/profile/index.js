import React from "react";

//import links
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

//CSS styling
import '../CSS/profile.css'
import axios from "axios";

import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import { findAllUsers } from "../service/user_service";
import { findAllReviews } from "../service/review_service";


const api = axios.create({
    withCredentials: true
});


//Profile compenent
const Profile = () => {

    //sets the current user to the user logged in
    const [currentUser, setCurrentUser] = useState({})

    const [reviews, setReviews] = useState([])

    const { usernameProfileName } = useParams()

    //selects the current user from the redcers
    const loggedInUser = useSelector((state) => state.currentUserReducer)

    //sets the state of the user to the on in the reducer
    const setUserState = () => {
        const temp = {
            username: loggedInUser.username,
            password: loggedInUser.password,
            email: loggedInUser.email,
            role: loggedInUser.role,

        }
        setCurrentUser(temp)
    }

    const getReviewsByUser = async (username) => {
        const allReviews = await findAllReviews()
        // console.log(allReviews)
        const movieReviews = allReviews.filter(r => r.username == username)
        setReviews(movieReviews)
        console.log(reviews)
    }

    const getUserProfileData = async () => {
        const allUser = await findAllUsers()
        const specificUser = allUser.filter(user => user.username == usernameProfileName)
        setCurrentUser(specificUser[0])
    }

    //selects the user once the application starts
    useEffect(() => {
        setUserState()
        getUserProfileData()
        getReviewsByUser(usernameProfileName)
    }, [usernameProfileName])

    return (
        <div className="col-12 col-lg-7 col-xl-7">
            <div className="profile_info">
                <h1 className="author_name">{usernameProfileName}</h1>
                <>
                    {usernameProfileName == loggedInUser.username &&
                        <p>{currentUser.email}</p>}
                </>
            </div>


            <div className="reviewed_games">
                {currentUser.role == "WRITER" &&
                    <>
                        <h1 className="review_section_title">Created Movie Reviews</h1>
                        <ul className="list-group">
                            {
                                reviews.map(review =>
                                    <li className="list-group-item">
                                        <b>Movie Title: </b>{review.title}<br />
                                        <b>Rating: </b>{review.rating}<br />
                                        <b>Review: </b>{review.review}<br />
                                    </li>
                                )
                            }
                        </ul>
                    </>
                }
            </div>
        </div>
    )
}

export default Profile