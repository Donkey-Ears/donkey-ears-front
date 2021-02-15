import axios from "axios"
import { HeaderHelper } from "../headerHelper";
import { SHOUT_LIST } from "./types";

export const getShout = (username, password) => {
    return dispatch => {
        const header = HeaderHelper();
        axios.post("https://donkey-ears-api.herokuapp.com/api/v1/shouts", {}, header).then(res => {
            if (res.status === 200) {
                dispatch({
                    type: SHOUT_LIST,
                    payload: {
                        shoutList: res.data.results
                    }
                })
            }
            console.log(res.status)
            console.log(res.data);
            // dispatch(addMessage(res.data));
            
        })
    }
};