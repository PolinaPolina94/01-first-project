import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {

    return (
        <div>
            <Paginator currentPage={props.currentPage}
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize} onPageChanged={props.onPageChanged} />
            <div>
                {
                    props.users.map(u => <User key={u.id} followingInProcess={props.followingInProcess}
                        unfollowUsers={props.unfollowUsers}
                        followUsers={props.followUsers}
                        user={u} />)

                }
            </div>
        </div>
    )
}

export default Users; 