import React from "react";

//imported so we can navigate back to different places
import {Link} from "react-router-dom";

///enables so that we can run commands when the applciations start
import {useEffect, useState} from "react";

//import Dispatch to update sate
import {useDispatch, useSelector} from "react-redux";

//imports the actions so that they can called
//for reference the order is This, actions, services (Which goes to the server), then the reducer
import {updateUser, createUser, findAllUsers, deleteUser} from "../action/user_action";

const Signup = () => {
    //makes it so we can pull from the reducers
    let userList = useSelector((state) => state.userReducer)

    //used to dispatch things to the reducer
    const dispatch = useDispatch();

    //this sets the state of the users. Right now newUser is the inital user it is set to and 
    //setNewUser is the function it will call to update it later on 
    //This state is basically the state of any new users that we might want to add in the application
    const [newUser, setNewUser] =
        useState(
            {
                username: '',
                password: '',
                email: '',
                role: ''
            }
        )
    ;

    // runs when the application starts to get all of the users
    useEffect(() => {
        findAllUsers(dispatch)
    }, []);

    //used to switch betweein the loggin forms
    const switchToLogin = () => {
        const action = {
            type: "login"
        }
        dispatch(action);
    }

    const changeToLogout = () => {
        //I will need to create a new user with the entry fields
        console.log(newUser.username);
        console.log(newUser.password);
        console.log(newUser.email);
        console.log(newUser.role);
        createUser(dispatch, newUser)
        const action = {
            type: "switchToLogin"
        }
        dispatch(action);
    }


    return (
        <>
            {/* Title */}
            <h1 className="login_signup_title">Sign Up</h1>

            {/* feilds to be filled out */}
            <h2 className="login_signup_field_title">Create Username</h2>

            {/* used to fill in the username, the value is connected to the newUser username 
            an onchange it make sure the rest of the newUser fields are there and then updates the specific one */}
            <textarea className="login_signup_TA"
                      placeholder="Create Username"
                      value={newUser.username}
                      onChange={(event) =>
                          setNewUser({
                              ...newUser,
                              username: event.target.value
                          })}>
            </textarea>

            {/* Cretes the password */}
            <h2 className="login_signup_field_title">Create Password</h2>
            <textarea className="login_signup_TA"
                      placeholder="Create Password"
                      value={newUser.password}
                      onChange={(event) =>
                          setNewUser({
                              ...newUser,
                              password: event.target.value
                          })}>
            </textarea>

            {/* Creates the email address of the user */}
            <h2 className="login_signup_field_title">Email</h2>
            <textarea className="login_signup_TA"
                      placeholder="Email"
                      value={newUser.email}
                      onChange={(event) =>
                          setNewUser({
                              ...newUser,
                              email: event.target.value
                          })}>
            </textarea>

            {/* Gives to option for either writter or reader */}
            <h2 className="login_signup_field_title">Select Role</h2>
            <select className="dropdown_role"
                    value={newUser.role}
                    onChange={(event) =>
                        setNewUser({
                            ...newUser,
                            role: event.target.value
                        })}>
                <option value="READER">Reader</option>
                <option value="WRITER">Writer</option>
            </select>

            <div className="login_signup_buttons">

                {/* Creates a new user */}
                <Link to="/">
                    <button className="login_signup_button"
                            onClick={changeToLogout}>
                        Sign Up
                    </button>
                </Link>

                {/* Navigates to the log in screen */}
                <button className="login_signup_button"
                        onClick={switchToLogin}>
                    Login
                </button>
            </div>
        </>
    )
}

export default Signup;