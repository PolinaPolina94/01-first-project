import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import { Field, reduxForm } from 'redux-form'

const Dialogs = (props) => {
    const dialogElements = props.dialogsData.map(d => {
        return <DialogItem name={d.name} id={d.id} />
    })

    const messageElements = props.messagesData.map(m => {
        return <MessageItem message={m.message} />
    })

    let addMessage = (values) => {
        props.sendNewMessage(values.newMessageText)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogElements}
            </div>

            <div className={classes.messages}>
                <div className={classes.messagesItem}>
                    <div>
                        {messageElements}
                    </div>
                    <br />

                    <AddMessageForm onSubmit={addMessage} />

                </div>
            </div>
        </div>
    );
}

let AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"newMessageText"} placeholder="Enter your message" />
            <div>
                <button> post </button>
            </div>
        </form>
    )
}

AddMessageForm = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;  