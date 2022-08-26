import React from "react";
import classes from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from "react-router-dom";

const User = (props) => {

    return (
        <div>
            <span>
                <div>
                    <NavLink to={`/profile/${props.user.id}`} >
                        <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto} className={classes.photo} alt="user_photo" />
                    </NavLink>
                </div>

                <div>
                    {props.user.followed

                        ? <button disabled={props.followingInProcess.some(id => id === props.user.id)}
                            onClick={() => { props.unfollowUsers(props.user.id) }}> UNFOLLOW </button>

                        : <button disabled={props.followingInProcess.some(id => id === props.user.id)}
                            onClick={() => { props.followUsers(props.user.id) }}> FOLLOW </button>}

                </div>
            </span>

            <span>
                <span>
                    <div> {props.user.name} </div>
                    <div> {props.user.status}  </div>
                </span>

                <span>
                    <div> {"props.user.location.country"} </div>
                    <div> {"props.user.location.city"} </div>
                </span>
            </span>
        </div>
    )
}

export default User; 