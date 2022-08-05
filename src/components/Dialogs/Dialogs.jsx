import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


/* формируем новый массив отрисовывающий компоненту на основе массива базы данных users */

/* Отрисовываем компоненту с помощью метода массива map  на основе массива с данными о сообщениях  */

const Dialogs = (props) => {
    const dialogElements = props.dialogsData.map(d => {
        return <DialogItem name={d.name} id={d.id}/>
    })

    const messageElements = props.messagesData.map(m => {
        return <MessageItem message={m.message} />
    })

    // const newMessage = React.createRef();        // смотри ниже 

    const addNewMessage = () => {
        props.sendNewMessage ()
    }

    let onMessageChange = (e) => {
        let message = e.target.value;    // вместо ref  можно использовать event.target.value 
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