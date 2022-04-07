import React from "react";

import '../CSS/create_review.css'

const Create_Review = () => {
    return (
        <div className="col-10 col-lg-7 col-xl-7">
            <div className="create_review_box">
                <h1 className="create_review_title">Create Review</h1>

                <h2 className="create_review_field_title">Title</h2>
                <textarea className="title_TA" placeholder="Enter Title"></textarea>

                <h2 className="create_review_field_title">Rating</h2>
                <select className="dropdown_rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <h2 className="create_review_field_title">Review</h2>
                <textarea className="summary_TA" placeholder="Enter review"></textarea>

                <button className="post_button">Post Review</button>
            </div>
        </div>
    )
}

export default Create_Review;