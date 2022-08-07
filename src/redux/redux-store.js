import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux"; 
import dialogsReducer from "./dialogs-reduser";
import profailReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer"
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers ({
    profailPage: profailReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
}
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;


export default store; 