import React from "react"
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className="cla">
            <div className={classes.item}>
                <img src="https://i1.sndcdn.com/artworks-1W1ucUu0AroJKisi-8sy04w-t500x500.jpg" />

                {props.message}
            </div>
            <span>likes</span>  {props.likesCount}
        </div>
    );
}

export default Post 