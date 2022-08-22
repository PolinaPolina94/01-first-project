import profailReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

 // 1. test data
let state = {
    postsData: [
        { id: 1, message: "Hello, Kitty", likesCount: 20 },
        { id: 2, message: "Hi, dear", likesCount: 15 },
        { id: 2, message: "Hi, dear", likesCount: 15 },
        { id: 2, message: "Hi, dear", likesCount: 15 },
    ]
};


test('length of posts should be incremented', () => {
    // 1. test data
    // state ...
   
    let action = addPostActionCreator("yoyoyo");

    // 2. action 
    let newState = profailReducer(state, action);

    // 3. expectation 
    expect(newState.postsData.length).toBe(5); 

});


test('message of post should be correct', () => {
    // 1. test data
   // state ...

    let action = addPostActionCreator("yoyoyo");

    // 2. action 
    let newState = profailReducer(state, action);

    // 3. expectation 
    expect(newState.postsData[4].message).toBe("yoyoyo"); 
});


test('length of posts after deleting should be decrement', () => {
    // 1. test data
   // state ...

    let action = deletePost(1);

    // 2. action 
    let newState = profailReducer(state, action);

    // 3. expectation 
    expect(newState.postsData.length).toBe(3); 
});

test('length of posts after using incorrect ID should not be changed', () => {
    // 1. test data
   // state ...

    let action = deletePost(1000);

    // 2. action 
    let newState = profailReducer(state, action);

    // 3. expectation 
    expect(newState.postsData.length).toBe(4); 
});