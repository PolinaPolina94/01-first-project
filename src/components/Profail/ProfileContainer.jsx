import React from "react"
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams, Navigate} from "react-router-dom"; 
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
        
    componentDidMount () {
        
        let userId = this.props.router.params.userId;
        if (!userId) {
            //  debugger;
            userId = this.props.autorizedUserId;
            }
        //  if (!userId) {
        //     this.props.history.push("/login");
        // this.props.router.location.pathname("/login")

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId)

 }

    render () {


        return (
           <Profile {...this.props} 
           profile={this.props.profile}
            status={this.props.status} 
            updateUserStatus= {this.props.updateUserStatus} />    
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profailPage.profile,  
        status: state.profailPage.status,
        autorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth       
    }
}
// // HOC-компонента, возвращающая контейнерную компоненту и выполняющая логику по перенаправлению на страницу логинизации незарегестрированного пользователя (см.папку hoc/ файл withAuthRedirect)
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect (mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent); 


export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
    withRouter,
    withAuthRedirect
)
    (ProfileContainer); 