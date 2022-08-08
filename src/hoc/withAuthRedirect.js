import React from "react"
import { Navigate } from "react-router-dom"
import { connect } from "react-redux";

// создаем собственный объект с необходимыми нам данными из стейта для hoc 

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

// HOC-компонента, возвращающая контейнерную компоненту и выполняющая логику по перенаправлению на страницу логинизации незарегестрированного пользователя
export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {

        render () {
            if (!this.props.isAuth) {
                return <Navigate to="/login"/> }  //перенаправляет на страницу с логинизацией незарегестрированных пользователей
                
                return <Component {...this.props}/>   
                }           
    }

    let ConnectedAuthRedirectComponent = connect (mapStateToPropsForRedirect)(RedirectComponent) // оборачиваем RedirectComponent в connect, чтобы был к ним доступ к state из store

    return ConnectedAuthRedirectComponent
   }
