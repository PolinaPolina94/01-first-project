import React from "react";
import classes from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from "react-router-dom";
// import * as axios from "axios";
import {usersAPI} from "../../api/api";


const Users = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return (
        <div>
            <div>
                {slicedPages.map(p =>
                    <span className={props.currentPage === p ? classes.selected : ''}
                        onClick={() => { props.onPageChanged(p) }}
                    >{p}</span>
                )}
            </div>

            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id} >
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.photo} alt="user_photo" />
                            </NavLink>
                        </div>

                        <div>
                            {u.followed

                                ? <button onClick={() => {

                                    usersAPI.unfollowUsers(u.id)
                                    //     axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    //     withCredentials: true,
                                    //     headers: {
                                    //     "API-KEY": "e95f2d0c-3a3e-4988-b7ae-1ca1e96eb3dd"
                                    //     }
                                    // })
                                        .then(data => {

                                            if (data.resultCode === 0) {
                                                props.unfollow(u.id)    
                                            }
                                        })

                                    }}> UNFOLLOW </button>

                                : <button onClick={() => {

                                    usersAPI.followUsers(u.id)
                                    // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    //     withCredentials: true,
                                    //     headers: {
                                    //     "API-KEY": "e95f2d0c-3a3e-4988-b7ae-1ca1e96eb3dd"
                                    //     }
                                    // })
                                        .then(data => {
                                         
                                            if (data.resultCode === 0) {
                                                props.follow(u.id)    
                                            }
                                        })

                                }}> FOLLOW </button>}


                        </div>
                    </span>

                    <span>
                        <span>
                            <div> {u.name} </div>
                            <div> {u.status}  </div>
                        </span>

                        <span>
                            <div> {"u.location.country"} </div>
                            <div> {"u.location.city"} </div>
                        </span>
                    </span>

                </div>)
            }
        </div>
    )
}

export default Users; 