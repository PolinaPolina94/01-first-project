import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    const dialogElements = props.dialogsData.map(d => {
        return <DialogItem name={d.name} id={d.id}/>
    })

    const messageElements = props.messagesData.map(m => {
        return <MessageItem message={m.message} />
    })

    const addNewMessage = () => {
        props.sendNewMessage ()
    }

    let onMessageChange = (e) => {
        let message = e.target.value;   
        props.updateNewMessage (message);
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

                    <div>
                        <textarea onChange={onMessageChange}
                             value={props.newMessageText}
                             placeholder="Enter your message" 
                             />
                        <div>
                            <button onClick={addNewMessage}> post </button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}
export default Dialogs;  