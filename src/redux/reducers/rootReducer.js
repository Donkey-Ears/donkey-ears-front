import {combineReducers} from "redux"
import { login } from "./login"
import { shout } from "./shout"

const rootReducer = combineReducers({
    login: login,
    shout: shout,

})

export default rootReducer
