const SEND_MESSAGE = 'SEND_MESSAGE';

let inicialState = {
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
    ]
}

const dialogsReducer = (state = inicialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = action.newMessageText
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 6, message: newMessage }],
            };
        default:
            return state;
    }
}

export const sendNewMessageActionCreator = (newMessageText) => {
    return { type: SEND_MESSAGE, newMessageText }
}

export default dialogsReducer;