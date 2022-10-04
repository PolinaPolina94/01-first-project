import React from "react"
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

      return (
            <div>
                  <ProfileInfo isOwner={props.isOwner} savePhoto={props.savePhoto} profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
                  <MyPostsContainer />
            </div>
      );
}


export default Profile
