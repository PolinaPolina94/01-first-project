import React from "react"
import Preloader from "../../common/Preloader/Preloader"
import classes from "./ProfileInfo.module.css"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"

const ProfileInfo = (props) => {

    if (!props.profile) {
       return  <Preloader/>
    }

    return (
        <div>
<div className={classes.foto}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWi7T29K2PWoVqpH-DCi12Cbs5r5VDzeVhBw&usqp=CAU" alt="cat"/>
      </div>
      <div className={classes.avatar}>
        <img src={props.profile.photos.large} alt="avatar_photo"/>
        
      <div> <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/> </div>

      <div className={classes.links}> 
      <a href="https://twitter.com">{props.profile.contacts.twitter}</a> 
      <a href="https://vk.com/">{props.profile.contacts.vk}</a>  
      <a href="https://www.instagram.com/">{props.profile.contacts.instagram}</a> 
      <a href="https://github.com/">{props.profile.contacts.github}</a> 
     
      </div>

      </div>
      </div>
    )
}

export default ProfileInfo