import { combineReducers, legacy_createStore as createStore } from "redux"; 
import dialogsReducer from "./dialogs-reduser";
import profailReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer"


let reducers = combineReducers ({
    profailPage: profailReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
}
)

let store = createStore(reducers);


window.store = store;


export default store; 