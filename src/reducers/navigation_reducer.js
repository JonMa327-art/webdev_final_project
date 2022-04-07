//Reducer for switching between the tab selected
const navigationTab = (state, action) => {
    state = { setFalse }
    switch (action.type) {
        case "home":
            return (
                {
                    ...state,
                    homeLit: true
                }
            )
        case "profile":
            return (
                {
                    ...state,
                    profileLit: true
                }
            )
        case "createReview":
            return (
                {
                    ...state,
                    createReviewLit: true
                }
            )
        case "loginSignup":
            return (
                {
                    ...state,
                    loginSignupLit: true
                }
            )
        case "logout":
            return (
                {
                    ...state,
                    logoutLit: true
                }
            )

        default:
            return ({
                homeLit: true,
                profileLit: false,
                createReviewLit: false,
                loginSignupLit: false,
                logoutLit: false
            })
    }
}

const setFalse = () => {
    return ({
        homeLit: false,
        profileLit: false,
        createReviewLit: false,
        loginSignupLit: false,
        logoutLit: false
    })
}

export default navigationTab;