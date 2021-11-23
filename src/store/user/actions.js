import {LOGIN_USER, LOGOUT_USER} from './constants'

import { auth } from "../../firebase";

export const loginUserAction = (user) => ({
    type: LOGIN_USER,
    payload: user
});

export const logoutUserAction = () => ({
    type: LOGOUT_USER
});

export const initAuthAction = (dispatch) => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            dispatch(loginUserAction(user));
        } else {
            dispatch(logoutUserAction());
        }
    });
};