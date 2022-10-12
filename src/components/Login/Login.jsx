import React from "react";
import classes from "./../Login/Login.module.css"
import { Field, reduxForm } from 'redux-form'
import { Input } from "../common/FormsControls/FormsControls";
import {required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import {login} from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

                                // Вместо предыдущих props параметров (let LoginForm = (props) => ... 
                                //   а потом в дальнейшем использование: form onSubmit={props.handleSubmit}) , ...   {props.error}
                                //   используем деструктуаризацию  let LoginForm = ({handleSubmit, error}) => { .... (тут уже в просы вписаны 
                                // непосредственно используемые иточники)
                                //   ... {error} 

let LoginForm = ({handleSubmit, error, captchaURL}) => {
    
    return (
    <form onSubmit={handleSubmit}>            
        <div>
            <Field placeholder={"email"} name={"email"} component={Input} 
            validate={[required]}/>
        </div>
        <div>
        <Field placeholder={"password"} name={"password"} component={Input}
        validate={[required]} />
        </div>
        <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
           </div>

        { captchaURL && <img src={captchaURL}/> }
        { captchaURL && <Field placeholder={"numbers"} name={"captcha"} component={Input} validate={[required]}/> }


           { error && <div className={classes.formEror}>
            {error} 
           </div>}
        <div>
            <button> login </button>
        </div>
    </form>
    )
}

LoginForm = reduxForm ({
    form: 'login'
})(LoginForm)


const Login = (props) => {

const onSubmit = (formData) => {
props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
}

    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return <div>
    <h1 className={classes.h}>LOGIN HERE!</h1>
    <LoginForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
    </div>

}

const mapStateToProps = (state) => {
return {
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL
}
}

export default connect (mapStateToProps, {login}) (Login);  