//Reducer for switching between the tab selected
const navigationTab = (state =
    {
        homeLit: true,
        profileLit: false,
        createReviewLit: false,
        loginSignupLit: false,
        logoutLit: false
    },
    action) => {
    switch (action.type) {
        case "home":
            state = { setFalse }
            return (
                {
                    ...state,
                    homeLit: true
                }
            )
        case "profile":
            state = { setFalse }
            return (
                {
                    ...state,
                    profileLit: true
                }
            )
        case "createReview":
            state = { setFalse }
            return (
                {
                    ...state,
                    createReviewLit: true
                }
            )
        case "loginSignup":
            state = { setFalse }
            return (
                {
                    ...state,
                    loginSignupLit: true
                }
            )
        case "logout":
            state = { setFalse }
            return (
                {
                    ...state,
                    logoutLit: true
                }
            )

        default:
            return ({ ...state })
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