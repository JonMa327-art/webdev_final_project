//This import allows us to talk to the server
import axios from "axios";

//The url to the local API
const USERS_API = 'http://localhost:4000/api/users';

//gets all of the users
export const findAllUsers = async () => {
    //awaits a response from the server
    const response = await axios.get(USERS_API);

    //returns the response data
    return response.data;
}

export const createUser = async (user) => {
    //awaits a response from the server while passing it the new user 
    const response = await axios.post(USERS_API, user)

    //response with the new data
    return response.data;
}

//update a users data
export const updateUser = async (user) => {
    //awits a responce from the server with the usrs id at the end of the url
    const response = await axios.put(`${USERS_API}/${user._id}`, user);

    //returns the user data
    return response.data;
}


export const deleteUser = async (user) => {
    //awits a responce from the server with the usrs id at the end of the url
    const response = await axios.delete(`${USERS_API}/${user._id}`);

    //return the user data
    return response.data;
}