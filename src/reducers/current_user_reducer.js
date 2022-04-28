//Changes the state of the current user.
const currentUserReducer = (state = {
    username: "",
    password: "",
    role: "",
    email: "",

}, action) => {
    switch (action.type) {
        case "currentUser":
            if (state.email === action.email) {
                return state
            }
            return (
                {
                    username: action.username,
                    password: action.password,
                    role: action.role,
                    email: action.email
                }
            )
        case "updateUser":
            return (
                {
                    username: action.username,
                    password: action.password,
                    role: action.role,
                    email: action.email
                }
            )

        case "noUser":
            return (
                {
                    username: "",
                    password: "",
                    role: "",
                    email: ""
                }
            )

        default:
            return (state);
    }

}

export default currentUserReducer