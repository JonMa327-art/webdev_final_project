import React from "react";

//import dispatcher
import { useDispatch } from "react-redux";


//import links
import { Link } from "react-router-dom";

//Login Component
const Login = () => {
    //crate dispatcher
    const dispatch = useDispatch();

    //dipatcher for switching between loggedIn and Loggedout
    const switchToSignup = () => {
        const action = {
            type: "signup"
        };
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
            <h1 className="login_signup_title">Login</h1>

            <h2 className="login_signup_field_title">Username</h2>
            <textarea className="login_signup_TA" placeholder="Enter Username"></textarea>

            <h2 className="login_signup_field_title">Password</h2>
            <textarea className="login_signup_TA" placeholder="Enter Password"></textarea>

            <div className="login_signup_buttons">
                <button className="login_signup_button"
                    onClick={switchToSignup}>
                    Sign Up
                </button>

                <Link to="/">
                    <button className="login_signup_button"
                        onClick={changeToLogout}>
                        Login
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Login;