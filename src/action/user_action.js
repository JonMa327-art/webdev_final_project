//import the services that interact with the server
import * as service from "../service/user_service.js";

//exports these functions
export const CREATE_USER = 'CREATE_USER';
export const FIND_ALL_USER = 'FIND_ALL_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';


//fins all of the users
export const findAllUsers = async (dispatch) => {
    //awaits the responce from the service which get a response from the server
    const users = await service.findAllUsers();

    //dispatches that data to the reducer to change the state of the users
    dispatch({
        type: FIND_ALL_USER,
        users
    })
}

//creates a usr
export const createUser = async (dispatch, user) => {
    //awaits a responce from the service which get the responce from the server to crate a new user
    const newUser = await service.createUser(user);
    dispatch({
        type: CREATE_USER,
        newUser
    });
}


//updates that users
export const updateUser = async (dispatch, user) => {
    //awaits a responce from the service the comes back with a respnce from the server
    const status = await service.updateUser(user);

    //dispatches the updated user to the reducer to change the state
    dispatch({
        type: UPDATE_USER,
        user
    });
}

//deletes a user
export const deleteUser = async (dispatch, user) => {
    //awaits a respocne from the service which gets a response from the server with the deleted user 
    const response = await service.deleteUser(user);
    dispatch({
        type: DELETE_USER,
        user
    })
}

