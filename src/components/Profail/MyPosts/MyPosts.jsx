import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";


const maxLength10 = maxLengthCreator(10)

/* создаем,компоненту на основе базы данных с постами. Компонента принимает в качестве пропсов параметры сообщений и количество лайков. */

const MyPosts = React.memo((props) => {     //Если мы работаем с классовой компонентой, то мы пишем так: class MyPost extends React.PureComponent { render () {...} ... } - PureComponent берет на себя логику метода жизненного цикла shouldComponentUpdate()
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps !== this.props || nextState !== this.state 
    // }
    const postElements = 
        [...props.postsData]
        .reverse()
            .map(p => {
                return <Post key={p.id} message={p.message} likesCount={p.likesCount} />
            })

    const addPosts = (values) => {
        props.addPost(values.newPostText);
        values.newPostText = " ";
            }
    
    return(
        <div>
            <h2> My posts</h2>
            
            <AddPostForm onSubmit={addPosts}/>
            
            <div className={classes.foto}>
                {postElements}
            </div>
        </div>
    );
        }); 
 

 // в компоненте-форме AddPostForm в поле Field при отрисовке компоненты (отдельно созданной "Textarea"), передаем ее как ссылку в {} у component
let AddPostForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <Field component={Textarea} name={"newPostText"} 
                    placeholder="Your post" value={props.newPostText} 
                    validate={[required, maxLength10]} />
            <div> <button> New post</button></div>
        </form>
    )
}

AddPostForm = reduxForm({
    form: "PropfileAddPostForm"
} )(AddPostForm)


export default MyPosts
