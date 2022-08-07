import React from "react"
import { NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css"

const DialogItem = (props) => {
    let path = "/dialogs/" + `${props.id}`

        return (
        <div className={classes.dialog}>

            <img src='http://4lapki.com/wp-content/uploads/2019/01/LPUavVJh-300x300.jpg' />

            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

export default DialogItem 