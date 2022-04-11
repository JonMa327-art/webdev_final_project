//Reducer for switching between the login and sign up
const login_signup = (state = { login: true }, action) => {
    switch (action.type) {
        case "signup":
            return ({ login: false })
        case "login":
            return ({ login: true })
        default:
            return (state)
    }
}

export default login_signup;