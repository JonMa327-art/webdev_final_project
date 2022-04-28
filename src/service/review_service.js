import axios from "axios";

const REVIEWS_API = 'http://localhost:4000/api/reviews';

export const findAllReviews = async () => {
    //awaits a response from the server
    const response = await axios.get(REVIEWS_API);

    //returns the response data
    return response.data;
}

export const createReview = async (review) => {
    //awaits a response from the server while passing it the new review
    const response = await axios.post(REVIEWS_API, review)

    //response with the new data
    return response.data;
}

export const updateReview = async (review) => {
    //awaits a response from the server with the review id at the end of the url
    const response = await axios.put(`${REVIEWS_API}/${review._id}`, review);

    //returns the review data
    return response.data;
}

export const deleteReview = async (review) => {
    //awaits a response from the server with the review id at the end of the url
    const response = await axios.delete(`${REVIEWS_API}/${review._id}`);

    //return the review data
    return response.data;
}