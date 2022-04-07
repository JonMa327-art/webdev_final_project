//Reducer for switching between the login and sign up
const login_signup = (state, action) => {
    switch (action.type) {
        case "signup":
            return ({ login: false })
        case "login":
            return ({ login: true })
        default:
            return ({ login: true })
    }
}

export default login_signup;