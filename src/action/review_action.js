import * as service from "../service/review_service";

export const FIND_ALL_REVIEWS = 'FIND_ALL_REVIEWS';
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';

export const findAllReviews = async (dispatch) => {
    //awaits the response from the service which get a response from the server
    const reviews = await service.findAllReviews();

    //dispatches that data to the reducer to change the state of the reviews
    dispatch({
        type: FIND_ALL_REVIEWS,
        reviews
    })
}

export const createReview = async (dispatch, review) => {
    //awaits a response from the service which get the responce from the server to crate a new review
    const newReview = await service.createReview(review);
    dispatch({
        type: CREATE_REVIEW,
        newReview
    });
}

export const updateReview = async (dispatch, review) => {
    //awaits a response from the service the comes back with a respnce from the server
    const status = await service.updateReview(review);

    //dispatches the updated review to the reducer to change the state
    dispatch({
        type: UPDATE_REVIEW,
        review
    });
}

export const deleteReview = async (dispatch, review) => {
    //awaits a response from the service which gets a response from the server with the deleted review
    const response = await service.deleteReview(review);
    dispatch({
        type: DELETE_REVIEW,
        review
    })
}
