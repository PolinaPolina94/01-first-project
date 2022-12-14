import React from "react";
import classes from './Header.module.css'
import { NavLink } from "react-router-dom";


const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://klike.net/uploads/posts/2021-11/1636537507_5.jpg" />

            <div className={classes.loginBlock}>

                { props.isAuth 
                ? <div> { props.login } <button onClick={props.logout}> Log out </button> </div> 
                : <NavLink to="/login">LOGIN</NavLink> }
                
            </div>

        </header>
    )
}

export default Header