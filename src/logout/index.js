//import react to do react stuff
import React from "react";

///enables so that we can run commands when the applciations start
import { useEffect, useState } from "react";

//import Dispatch to update sate
import { useDispatch, useSelector } from "react-redux";

//imports the actions so that they can called
//for reference the order is This, actions, services (Which goes to the server), then the reducer
import { findAllUsers, logout } from "../action/user_action";

//import Links to navigate to different screens
import { Link } from "react-router-dom";

//Logout Component
const Logout = () => {
    let userList = useSelector((state) => state.userReducer)

    //creates a dispatch to send back if we need to switch to a difference screen
    const dispatch = useDispatch()

    const [newUser, setNewUser] = useState({ User: 'New User' });

    // runs when the application starts to get all of the users
    useEffect(() => { findAllUsers(dispatch) }, []);

    //function call to the switch backs
    const handleLogOut = () => {
        logout(dispatch, newUser)
    }

    return (
        <div className="col-10 col-lg-7 col-xl-7">
            <div className="login_block">
                <h1 className="login_signup_title">Logout</h1>

                <div className="login_signup_buttons">
                    <Link to="/">
                        <button className="login_signup_button"
                            onClick={handleLogOut}>
                            Logout
                        </button>
                    </Link>
                </div>
            </div>
            <>
                {userList.map(user =>
                    <p>{user.username}</p>)}
            </>
        </div>
    )
}

export default Logout