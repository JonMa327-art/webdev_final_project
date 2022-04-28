//reducer to determine to switch to user to loggedin or logged out
const loginLogoutReducer = (state = { login: false }, action) => {
    switch (action.type) {
        case "switchToLogin":
            return ({ login: true })
        case "switchToLogout":
            return ({ login: false })
        default:
            return (state)
    }

}

export default loginLogoutReducer