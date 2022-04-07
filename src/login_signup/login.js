import React from "react";
import { useDispatch } from "react-redux";


//Login Component
const Login = () => {
    const dispatch = useDispatch();
    const switchToSignup = () => {
        const action = {
            type: "signup"
        };
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
                    onClick={switchToSignup}
                >Sign Up</button>
                <button className="login_signup_button">Login</button>
            </div>
        </>
    )
}

export default Login;