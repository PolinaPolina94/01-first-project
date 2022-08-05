import { sendNewMessageActionCreator, updateNewMessageActionCreator } from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (message) => {
            dispatch(updateNewMessageActionCreator(message));
        },

        sendNewMessage: () => {
            dispatch(sendNewMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;  