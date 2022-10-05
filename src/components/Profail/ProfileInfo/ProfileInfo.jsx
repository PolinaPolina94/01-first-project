import React, { useState } from "react"
import Preloader from "../../common/Preloader/Preloader"
import classes from "./ProfileInfo.module.css"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import userPhoto from '../../../assets/images/user.png'
import ProfileDataForm from "./ProfileDataForm"

const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false);   //hook useState()


  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
   props.saveProfile(formData).then(()=> {
    setEditMode(false);

   }) 
   }


  return (
    <div className={classes.user}>
      <div className={classes.foto}>
        <img src={props.profile.photos.large || userPhoto} alt="avatar_photo" />

        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}

        { editMode 
          ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/> 
          : <ProfileData {...props} goToEditMode={()=>{setEditMode(true)}} isOwner={props.isOwner}/> }
       
        <div> <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} /> </div> 

        </div>
    </div>
  )
}


// Компонента, в которая отрисовывает данные пользователя, которые находятся в profile 
const ProfileData = (props) => {
  return (
    <div>
      {props.isOwner && <div> <button onClick={props.goToEditMode}>Edit</button></div>}
      <div>
        <b>Name:</b> {props.profile.fullName}
      </div>
      <div>
        <b>Looking for a job:</b> {props.profile.lookingForAJob ? "yes" : "no"}
      </div>
      {props.profile.lookingForAJob &&
        <div>
          <b>Job description:</b> {props.profile.lookingForAJobDescription}
        </div>
      }
      <div>
        <b>About me:</b> {props.profile.aboutMe}
      </div>
      <div>
        <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
        })}
      </div>
    </div>
  )
}



const Contact = ({ contactTitle, contactValue }) => {
  return <div className={classes.contacts}> <b>{contactTitle}</b> : {contactValue} </div>
}

export default ProfileInfo