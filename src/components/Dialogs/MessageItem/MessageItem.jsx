import classes from "./../Dialogs.module.css"


const MessageItem = (props) => {
    return (
        <div className={classes.message}>
            <img src="https://iteen.by/local/templates/.default/img/tmp/main-pic-bg_01.png"/>
            {props.message}
        </div>
    )
}

export default MessageItem