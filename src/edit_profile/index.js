import React from "react";

import '../CSS/edit_profile.css'

import { useState } from "react";

//import an action command from the actions methods
import { updateUser } from "../action/user_action";

import { useDispatch, useSelector } from "react-redux";

const Edit_Profile = () => {

    const currentUser = useSelector((state) => state.currentUserReducer)

    const dispatch = useDispatch()

    //Sets the updates of the new users via a state
    const [updatedUserInfo, setUpdatedUserInfo] = useState(
        {
            username: currentUser.username,
            password: currentUser.password,
            email: currentUser.email,
            role: currentUser.role
        }
    )

    //updates the user when the button is clicked
    const handleUpdateUser = () => {
        updateUser(dispatch, updatedUserInfo);
        const action = {
            type: "updateUser",
            username: updatedUserInfo.username,
            password: updatedUserInfo.password,
            email: updatedUserInfo.email,
            role: updatedUserInfo.role
        }

        dispatch(action)
    }

    return (
        <div className="col-12 col-lg-7 col-xl-7">
            <div className="edit_profile_block">
                <h1 className="edit_profile_title">Edit Profile</h1>

                <h2 className="edit_profile_field_title">New Name</h2>
                <textarea className="edit_profile_TA" placeholder="Enter New username"
                    value={updatedUserInfo.username} onChange={(event) =>
                        setUpdatedUserInfo({
                            ...updatedUserInfo,
                            username: event.target.value
                        })}></textarea>

                <h2 className="edit_profile_field_title">New Password</h2>
                <textarea className="edit_profile_TA" placeholder="Enter New Password"
                    value={updatedUserInfo.password} onChange={(event) =>
                        setUpdatedUserInfo({
                            ...updatedUserInfo,
                            password: event.target.value
                        })}></textarea>

                <div className="edit_profile_buttons">
                    <button className="edit_profile_button"
                        onClick={handleUpdateUser}>Save Edits</button>
                </div>
            </div>
        </div>
    )
}

export default Edit_Profile;