import React from "react";

//import css 
import '../CSS/home.css'


//Home Component
const Home = () => {
    return (
        <div className="col-10 col-lg-7 col-xl-7">
            {/* search bar */}
            <div className="home_search">
                <textarea className="home_search_TA" placeholder="Search Game?">

                </textarea>
            </div>


            {/* List of results. Will refactor later but for now I will just layout the html here*/}
            <ul className="game_reviews">
                <li className="game">
                    <img src="images/game_image_test.jpeg" className="game_image" />
                    <div className="game_details">
                        <h1 className="game_title">Game title</h1>
                        <p className="game_reviewer_author">author</p>
                        <p className="game_rating">rating 98 x 160</p>
                        <p className="game_review_summary">List layout the html hereList of results. Will refactor later but for now I will just layout the html hereList of results. Will refactor later but for now I will just layout the html hereList of results. Will refactor later but for now I will just layout the html here</p>
                        <button className="view_review_button">View Review</button>
                    </div>
                </li>
                <li className="game">
                    <img src="images/game_image_test.jpeg" className="game_image" />
                    <div className="game_details">
                        <h1 className="game_title">Game title</h1>
                        <p className="game_reviewer_author">author</p>
                        <p className="game_rating">rating 98 x 160</p>
                        <p className="game_review_summary">List layout the html hereList of results. Will refactor later but for now I will just layout the html hereList of results. Will refactor later but for now I will just layout the html hereList of results. Will refactor later but for now I will just layout the html here</p>
                        <button className="view_review_button">View Review</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Home