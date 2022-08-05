import React from "react"
import classes from "./Navbar.module.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div>
                <div className={classes.item}>
                    <NavLink to="/profile" >Profile </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/dialogs"> Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/news"> News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/music"> Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/settings"> Settings</NavLink>
                </div>

                <div className={classes.item}>
                <NavLink to="/users"> Users </NavLink>

                </div>
                <div className={`${classes.item} ${classes.friends}`}>
                    <NavLink to="/friends"> Friends</NavLink>
                    <div className="favourites">

                        <img src="http://4lapki.com/wp-content/uploads/2019/01/LPUavVJh-300x300.jpg" />

                        <img src="http://4lapki.com/wp-content/uploads/2019/01/LPUavVJh-300x300.jpg" />

                        <img src="http://4lapki.com/wp-content/uploads/2019/01/LPUavVJh-300x300.jpg" />

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar