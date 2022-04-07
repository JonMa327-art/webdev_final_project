import React from "react";

//Dispatcher
import { Dispatch } from "react";
import { act } from "react-dom/test-utils";
import { useDispatch } from "react-redux";

const Signup = () => {
    const dispatch = useDispatch();
    const switchToLogin = () => {
        const action = {
            type: "login"
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
                <button className="login_signup_button">Sign Up</button>
                <button className="login_signup_button"
                    onClick={switchToLogin}
                >Login</button>
            </div>
        </>
    )
}

export default Signup;