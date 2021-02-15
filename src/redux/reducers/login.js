import { LOGIN, LOGIN_CHANGE_USER_INFO } from "../actions/types";

const initialState = {
    userInfo: {
        username: '',
        password: ''
    }
}

export const login = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return state;
        case LOGIN_CHANGE_USER_INFO:
            console.log(state.userInfo[action.payload.tag])
            state.userInfo[action.payload.tag] = action.payload.value
            return {
                ...state,
            }
        
        default:
            return state;
    }
}
