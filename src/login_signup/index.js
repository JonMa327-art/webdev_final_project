import React from "react";

//reducer
import { useSelector } from "react-redux";

//CSS styling
import '../CSS/login_signup.css'

//import Login, Signup components
import Login from "./login";
import Signup from "./signup";


//login component
const Login_Signup = () => {

    //uses the reducer to set the state of what page to show
    const login = useSelector((state) => state.login_signup.login)

    return (
        <div className="col-10 col-lg-7 col-xl-7">
            <div className="login_block">
                {
                    login && <Login />
                }
                {
                    !login && <Signup />
                }
            </div>
        </div>
    )
}

export default Login_Signup;