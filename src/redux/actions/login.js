import axios from "axios"
import { LOGIN, LOGIN_CHANGE_USER_INFO } from "./types";

export const login = (username, password) => {
    const data = {
        username,
        password
    }
    return dispatch => {
        axios.post("https://donkey-ears-api.herokuapp.com/api/v1/users/login", data, {}).then(res => {
            if (res.status === 200) {
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("user-seq", res.data.id)
            }
            console.log(res.status)
            console.log(res.data);
            // dispatch(addMessage(res.data));
            dispatch({
                type: LOGIN,
            })
        })
    }
};

export const changeUserInfo = (tag, value) => {
    console.log(tag, value);
    return dispatch => {
        dispatch({
            type: LOGIN_CHANGE_USER_INFO,
            payload: {
                tag: tag,
                value: value
            }
        })
    }
};