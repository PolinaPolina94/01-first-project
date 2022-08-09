import { sendNewMessageActionCreator, updateNewMessageActionCreator } from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
// import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


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

// // HOC-компонента, возвращающая контейнерную компоненту и выполняющая логику по перенаправлению на страницу логинизации незарегестрированного пользователя
// let AuthRedirectComponent = withAuthRedirect(Dialogs)


// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

// export default DialogsContainer;  

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)
    (Dialogs);