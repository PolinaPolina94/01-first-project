// import React from "react";
// import classes from "./../Login/Login.module.css"
// import { Field, reduxForm } from 'redux-form'


// let LoginForm = (props) => {
    
//     return (
//     <form onSubmit={props.handleSubmit}>
//         <div>
//             <Field placeholder={"login"} name={"login"} component={"input"}/>
//         </div>
//         <div>
//         <Field placeholder={"password"} name={"password"} component={"input"}/>
//         </div>
//         <div>
//         <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
//            </div>
//         <div>
//             <button> login </button>
//         </div>
//     </form>
//     )
// }

// LoginForm = reduxForm ({
//     form: 'login'
// })(LoginForm)


// const Login = (props) => {

// const onSubmit = (formData) => {
// console.log(formData)
// }

//     return <div>
//     <h1 className={classes.h}>LOGIN HERE!</h1>
//     <LoginForm onSubmit={onSubmit}/>
//     </div>

// }

// export default Login 




import React from "react";
import classes from "./../Login/Login.module.css"
import { Field, reduxForm } from 'redux-form'


let LoginForm = (props) => {
    
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"login"} name={"login"} component={"input"}/>
        </div>
        <div>
        <Field placeholder={"password"} name={"password"} component={"input"}/>
        </div>
        <div>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
           </div>
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
console.log(formData)
}

    return <div>
    <h1 className={classes.h}>LOGIN HERE!</h1>
    <LoginForm onSubmit={onSubmit}/>
    </div>

}

export default Login 