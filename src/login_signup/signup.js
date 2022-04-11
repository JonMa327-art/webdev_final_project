import React from "react";

import { Link } from "react-router-dom";

//Dispatcher
import { useDispatch } from "react-redux";

const Signup = () => {
    //used to dispatch things to the reducer
    const dispatch = useDispatch();

    //used to switch betweein the loggin forms
    const switchToLogin = () => {
        const action = {
            type: "login"
        }
        dispatch(action);
    }

    const changeToLogout = () => {
        const action = {
            type: "switchToLogin"
        }
        dispatch(action);
    }


    return (
        <>
            <h1 className="login_signup_title">Sign Up</h1>

            <h2 className="login_signup_field_title">Create Username</h2>
            <textarea className="login_signup_TA" placeholder="Create Username"></textarea>

            <h2 className="login_signup_field_title">Your Name</h2>
            <textarea className="login_signup_TA" placeholder="Your Name"></textarea>

            <h2 className="login_signup_field_title">Create Password</h2>
            <textarea className="login_signup_TA" placeholder="Create Password"></textarea>

            <h2 className="login_signup_field_title">Email</h2>
            <textarea className="login_signup_TA" placeholder="Email"></textarea>

            <h2 className="login_signup_field_title">Phone Number</h2>
            <textarea className="login_signup_TA" placeholder="Phone Number"></textarea>

            <h2 className="login_signup_field_title">Select Role</h2>
            <select className="dropdown_role">
                <option value="READER">Reader</option>
                <option value="WRITER">Writer</option>
            </select>

            <div className="login_signup_buttons">
                <Link to="/">
                    <button className="login_signup_button"
                        onClick={changeToLogout}>
                        Sign Up
                    </button>
                </Link>
                <button className="login_signup_button"
                    onClick={switchToLogin}>
                    Login</button>
            </div>
        </>
    )
}

export default Signup;