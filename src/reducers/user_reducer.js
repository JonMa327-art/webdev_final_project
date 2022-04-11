import { CREATE_USER, FIND_ALL_USER, UPDATE_USER, DELETE_USER } from '../action/user_action.js'


const userReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_USER:
            return action.users;
        case CREATE_USER:
            return [
                ...state,
                action.newUser
            ]
        case UPDATE_USER:
            return state.map(
                user => user._id === action.user._id ?
                    action.user : user);
        case DELETE_USER:
            return state.filter(
                user => user._id !== action.user._id);
        default:
            return state
    }
}

export default userReducer;