import React from "react";

//imported to add linked to the navigation
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

//CSS
import '../CSS/navigation.css'


const Navigation = () => {

    //create the selector and hold to start of everything
    const navTabs = useSelector((state) => state.navigationTab)
    const logInLogout = useSelector((state) => state.loginLogoutReducer)
    const currentUserRole = useSelector((state) => state.currentUserReducer)

    //create the dispatcher and dispatches back somethings to the reducer to change the state
    const dispatch = useDispatch();

    const changeHighlightedLink = (name) => {
        const action = {
            type: name
        };
        dispatch(action);
    }

    //name of actions sent when this dispacter is called
    const homeName = "home"
    const profileName = "profile"
    const createReviewName = "createReview"
    const loginSignupName = "loginSignup"
    const logoutName = "logout"
    return (
        <div className="col-2 col-lg-2 col-xl-3">
            <ul className="links">
                {/* Moive review title */}
                <li className="link" onClick={() => changeHighlightedLink(homeName)}>
                    <Link to="/" className="link_text">
                        Movie Reviews
                    </Link>
                </li>

                {/* Home */}
                <div onClick={() => changeHighlightedLink(homeName)}>
                    <Link to="/" className="link_text">
                        {renderHome(navTabs.homeLit)}
                    </Link>
                </div>

                {/* Profile */}
                <div onClick={() => changeHighlightedLink(profileName)}>
                    <Link to="/profile" className="link_text">
                        {renderProfile(navTabs.profileLit, logInLogout.login)}
                    </Link>
                </div>

                {/* Create Review */}
                <div onClick={() => changeHighlightedLink(createReviewName)}>
                    <Link to="/create_review" className="link_text">
                        {renderCreateReview(navTabs.createReviewLit, logInLogout.login, currentUserRole.role)}
                    </Link>
                </div>

                {/* Login Sign Up */}
                <div onClick={() => changeHighlightedLink(loginSignupName)}>
                    <Link to="/login_signup" className="link_text">
                        {renderLoginSignup(navTabs.loginSignupLit, logInLogout.login)}
                    </Link>
                </div>

                {/* Logout */}
                <div onClick={() => changeHighlightedLink(logoutName)}>
                    <Link to="/logout" className="link_text">
                        {renderLogout(navTabs.logoutLit, logInLogout.login)}
                    </Link>
                </div>
            </ul>
        </div>
    )
}

//Renders the home tab depending on weather or not it is selected
const renderHome = (homeLit) => {
    if (homeLit) {
        return (
            <li className="link link-highlight">
                Home
            </li>
        )
    }
    return (
        <li className="link">
            Home
        </li>
    )
}

//Renders the profile tab depending on if you it is selected of it the person is logged in
const renderProfile = (profileLit, loggedIn) => {
    if (!loggedIn) {
        return (
            <></>
        )
    }
    if (profileLit) {
        return (
            <li className="link link-highlight">
                Your Profile
            </li>
        )
    }
    return (
        <li className="link">
            Your Profile
        </li>
    )
}

//Renders the create review tab base on it if is selected, if it is logged in, or if it is a writter
const renderCreateReview = (createReviewLit, loggedIn, isWritter) => {
    if (!loggedIn || isWritter != "WRITER") {
        return (
            <></>
        )
    }
    if (createReviewLit) {
        return (
            <li className="link link-highlight">
                Create Review
            </li>

        )
    }
    return (
        <li className="link">
            Create Review
        </li>

    )
}

//Renders the login screen and the sign up page
const renderLoginSignup = (loginSignupLit, loggedIn) => {
    if (loggedIn) {
        return (
            <></>
        )
    }
    if (loginSignupLit) {
        return (
            <li className="link link-highlight">
                Login/Sign Up
            </li>

        )
    }
    return (
        <li className="link">
            Login/Sign Up
        </li>

    )
}


//Renders the logout screen and the sign up page
const renderLogout = (logoutLit, loggedIn) => {
    if (!loggedIn) {
        return (
            <></>
        )
    }
    if (logoutLit) {
        return (
            <li className="link link-highlight">
                Logout
            </li>

        )
    }
    return (
        <li className="link">
            Logout
        </li>

    )
}

export default Navigation