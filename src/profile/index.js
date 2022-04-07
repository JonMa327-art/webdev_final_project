import React from "react";

//import links
import { Link } from "react-router-dom";

//CSS styling
import '../CSS/profile.css'

//Profile compenent
const Profile = () => {
    return (
        <div className="col-10 col-lg-7 col-xl-7">

            <div className="profile_info">
                <h1 className="author_name">Author Name</h1>
                <p className="date_joined">date joined</p>
                <p className="review_count">number of reviews</p>
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