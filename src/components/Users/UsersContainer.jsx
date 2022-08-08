// import Users from "./Users";
import { connect } from "react-redux";
import { follow, unfollow, toggleFollowingProcess, getUsers, markCurrentUserPage, followUsers, unfollowUsers } from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize); 

    }

    onPageChanged = (pageNumber) => {

        this.props.markCurrentUserPage(pageNumber, this.props.pageSize); 

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : ''}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                users={this.props.users}
                isFetching={this.props.isFetching}
                toggleFollowingProcess={this.props.toggleFollowingProcess}
                followingInProcess={this.props.followingInProcess}
                followUsers={this.props.followUsers}
                unfollowUsers={this.props.unfollowUsers}
            />

        </>
    }
}

// вызвали hoc-компоненту, решающую вопрос по закрытию страницы от незарегестрированного пользователя (см.папку hoc/ файл withAuthRedirect)
// и передали эту компоненту connectу (снизу)

let withRedirect = withAuthRedirect(UsersContainer)


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProcess: state.usersPage.followingInProcess
    }
}


export default connect(mapStateToProps, {follow, unfollow, 
        toggleFollowingProcess, getUsers, markCurrentUserPage, 
        followUsers, unfollowUsers })(withRedirect);


