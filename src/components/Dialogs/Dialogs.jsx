import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { Textarea } from "../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50); 

const Dialogs = (props) => {
    const dialogElements = props.dialogsData.map(d => {
        return <DialogItem name={d.name} id={d.id} key={d.id} />
    })

    const messageElements = props.messagesData.map(m => {
        return <MessageItem message={m.message} key={m.id}/>
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
            <Field component={Textarea} name={"newMessageText"} placeholder="Enter your message" 
                validate={[required, maxLength50]}
                />
            <div>
                <button> post </button>
            </div>
        </form>
    )
}

AddMessageForm = reduxForm({
    form: 'dialog-add-message-form'
})(AddMessageForm)

export default Dialogs;  