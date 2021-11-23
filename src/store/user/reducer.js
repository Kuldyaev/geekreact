import {LOGIN_USER, LOGOUT_USER} from './constants'

const user = (state = {user: null}, action) => {
    switch (action.type) {
        case LOGIN_USER: {
            return {
                user: action.payload
            };
        }
        case LOGOUT_USER: {
            return {
                user: null
            };
        }
        default: {
            return state;
        }
    }
};

export default user