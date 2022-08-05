import profailReducer from "./profail-reducer";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {

        profailPage: {
            postsData: [
                { id: 1, message: "Hello, Kitty", likesCount: 20 },
                { id: 2, message: "Hi, dear", likesCount: 15 },
                { id: 2, message: "Hi, dear", likesCount: 15 },
                { id: 2, message: "Hi, dear", likesCount: 15 },
            ],

            newPostText: " ",
        },

        dialogsPage: {

            dialogsData: [
                { id: 1, name: "Petya" },
                { id: 2, name: "Olya" },
                { id: 3, name: "Dima" },
                { id: 4, name: "Vika" },
                { id: 5, name: "Kostya" },
            ],

            messagesData: [
                { id: 1, message: "Hello, how are you?" },
                { id: 2, message: "Hi everyone!" },
                { id: 3, message: "Kek!" },
            ],

            newMessageText: " ",

        },

        sidebar: {
            users: [
                { id: 1, name: "Petya" },
                { id: 2, name: "Olya" },
                { id: 3, name: "Dima" },
            ]
        }
    },
    _callSubscriber () {
        console.log('state changed')
    },
    getState () {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {

        this._state.profailPage = profailReducer(this._state.profailPage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

    }
}

export default store

window.store = store;
