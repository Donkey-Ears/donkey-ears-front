import { SHOUT_LIST } from "../actions/types";

const initialState = {
    shoutList: []
}

export const login = (state = initialState, action) => {
    switch (action.type) {
        case SHOUT_LIST:
            state.shoutList = action.payload.shoutList
            return state;
     
        default:
            return state;
    }
}
