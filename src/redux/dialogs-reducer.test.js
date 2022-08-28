import dialogsReducer, { deleteMessage, sendNewMessageActionCreator } from "./dialogs-reduser";

let state = {
    messagesData: [
        { id: 1, message: "Hello, how are you?" },
        { id: 2, message: "Hi everyone!" },
        { id: 3, message: "Kek!" },
    ]
};


test("length of messages should be longer", () => {
    let action = sendNewMessageActionCreator("yoyoyo")

    let newState = dialogsReducer(state, action);

    expect(newState.messagesData.length).toBe(4);


})

test("message should be correct", () => {
    let action = sendNewMessageActionCreator("yoyoyo")

    let newState = dialogsReducer(state, action);

    expect(newState.messagesData[3].message).toBe("yoyoyo");

})

test("length of messages should be decrement", () => {

    let action = deleteMessage(1);

    let newState = dialogsReducer(state, action);

    expect(newState.messagesData.length).toBe(2);
})