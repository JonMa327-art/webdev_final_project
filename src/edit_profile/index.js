import React from "react";

import '../CSS/edit_profile.css'

const Edit_Profile = () => {
    return (
        <div className="col-10 col-lg-7 col-xl-7">
            <div className="edit_profile_block">
                <h1 className="edit_profile_title">Edit Profile</h1>

                <h2 className="edit_profile_field_title">Your Name</h2>
                <textarea className="edit_profile_TA" placeholder="Create Username"></textarea>

                <h2 className="edit_profile_field_title">Password</h2>
                <textarea className="edit_profile_TA" placeholder="Your Name"></textarea>

                <h2 className="edit_profile_field_title">Emial</h2>
                <textarea className="edit_profile_TA" placeholder="Create Password"></textarea>

                <h2 className="edit_profile_field_title">Phone Number</h2>
                <textarea className="edit_profile_TA" placeholder="Email"></textarea>

                <div className="edit_profile_buttons">
                    <button className="edit_profile_button">Save Edits</button>
                </div>
            </div>
        </div>
    )
}

export default Edit_Profile;