import React from "react";

//import dispatcher
import { useDispatch, useSelector } from "react-redux";

//import links
import { useNavigate } from "react-router-dom";

//import user actions
import { login } from "../action/user_action";

//import use state
import { useState } from "react";


//Login Component
const Login = () => {

    const logInLogout = useSelector((state) => state.loginLogoutReducer)

    //crate dispatcher
    const dispatch = useDispatch();

    const navigate = useNavigate();

    //current user
    const [currentUser, setCurrentUser] =
        useState(
            {
                username: '',
                password: '',
            }
        );

    //dipatcher for switching between loggedIn and Loggedout
    const switchToSignup = () => {
        const action = {
            type: "signup"
        };
        dispatch(action);
    }

    //handles what happens when a user logs in
    const handleLogIn = () => {
        login(dispatch, currentUser);

        // if (logInLogout.login) {
        navigate("/")
        // }
    }

    return (
        <>
            <h1 className="login_signup_title">Login</h1>

            <h2 className="login_signup_field_title">Username</h2>
            <textarea className="login_signup_TA" placeholder="Enter Username"
                value={currentUser.username} onChange={(event) =>
                    setCurrentUser({
                        ...currentUser,
                        username: event.target.value
                    })}></textarea>

            <h2 className="login_signup_field_title">Password</h2>
            <textarea className="login_signup_TA" placeholder="Enter Password"
                value={currentUser.password} onChange={(event) =>
                    setCurrentUser({
                        ...currentUser,
                        password: event.target.value
                    })}></textarea>

            <div className="login_signup_buttons">
                <button className="login_signup_button"
                    onClick={switchToSignup}>
                    Sign Up
                </button>

                <button className="login_signup_button"
                    onClick={handleLogIn}>
                    Login
                </button>
            </div>
        </>
    )
}

export default Login;