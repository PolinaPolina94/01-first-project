import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

/* создаем, какбэ функцию, возвращающую компоненту на основе базы данных с постами. Компонента принимает в качестве пропсов параметры сообщений и количество лайков. */

const MyPosts = (props) => {

        const postElements = props.postsData.map ( p=> {
        return <Post message={p.message} likesCount={p.likesCount}/>
    } )

    let newPostElement = React.createRef (); 

    let addPosts = () => {
        props.addPost();   
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <h2> My posts</h2>
            
            <textarea onChange = {onPostChange } 
            ref={newPostElement} value={props.newPostText}
            placeholder= " Your post " />

            <div className={classes.button}>
                <button onClick={ addPosts } >New post</button>
            </div>
            <div className={classes.foto}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts