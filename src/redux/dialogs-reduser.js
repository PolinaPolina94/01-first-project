const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

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
        ],
        newMessageText: " ",
    
}

const dialogsReducer = (state = inicialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: 
            let newMessage = {
                id: 4,
                message: state.newMessageText
            };
             return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: '',
            };
            
        
        case UPDATE_NEW_MESSAGE_TEXT: 
            return {
                ...state, 
                newMessageText: action.newText
            };
            
        default:
            return state;
    }
}

export const sendNewMessageActionCreator = () => {
    return { type: SEND_MESSAGE }
}


export const updateNewMessageActionCreator = (message) => {
    return  {type: UPDATE_NEW_MESSAGE_TEXT, newText: message }
}


export default dialogsReducer;