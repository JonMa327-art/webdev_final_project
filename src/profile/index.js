import React from "react";

//import links
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

//CSS styling
import '../CSS/profile.css'
import axios from "axios";

import { useSelector } from "react-redux";

const api = axios.create({
    withCredentials: true
});


//Profile compenent
const Profile = () => {

    //sets the current user to the user logged in
    const [currentUser, setCurrentUser] = useState({})

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

    //selects the user once the application starts
    useEffect(() => { setUserState() }, [])
    return (
        <div className="col-10 col-lg-7 col-xl-7">

            <div className="profile_info">
                <h1 className="author_name">{loggedInUser.username}</h1>
                <Link to="/edit_profile" className="link_text">
                    <button className="edit_button">
                        Edit Profile</button>
                </Link>
            </div>

            <div className="liked_reviews">
                <h1 className="review_section_title">Reviews you Liked</h1>
            </div>

            <div className="reviewed_games">
                <h1 className="review_section_title">Your Game Reviews</h1>
            </div>
        </div>
    )
}

export default Profile