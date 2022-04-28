import { CREATE_REVIEW, FIND_ALL_REVIEWS, UPDATE_REVIEW, DELETE_REVIEW } from '../action/review_action.js'


const reviewReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_REVIEWS:
            return action.reviews;
        case CREATE_REVIEW:
            return [
                ...state,
                action.newReview
            ]
        case UPDATE_REVIEW:
            return state.map(
                review => review._id === action.review._id ?
                    action.review : review);
        case DELETE_REVIEW:
            return state.filter(
                review => review._id !== action.review._id);
        default:
            return state
    }
}

export default reviewReducer;
