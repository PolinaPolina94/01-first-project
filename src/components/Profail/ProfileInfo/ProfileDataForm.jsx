import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../common/FormsControls/FormsControls';
import classes from "./ProfileInfo.module.css"


let ProfileDataForm = ({handleSubmit, profile, error}, props) => {
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <div>
                <b>Name:</b> <Field placeholder={"name"} name={"fullName"} component={Input} />
            </div>
            <div>
                <b>Looking for a job:</b>
                <Field type={"checkbox"} name={"lookingForAJob"} component={Input} />
            </div>
            <div>
                <b>Job description:</b>
                <Field component={Textarea} name={"lookingForAJobDescription"}
                    placeholder="Your skills" value={"blabla"} />
            </div>
            <div>
                <b>About me:</b>
                <Field component={Textarea} name={"aboutMe"}
                    placeholder="write smth about you" value={"blabla"} />
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                    return <div key={key} >
                        <b>{key}: {<Field placeholder={key} name={"contacts." + key} component={Input} /> } </b> 
                    </div>
                })}
            </div>

            <div> <button>save</button> </div>
            { error && <div className={classes.formEror}>
            {error} 
           </div>}

        </form>
    )
}


ProfileDataForm = reduxForm({
    form: 'edit-profile',
    enableReinitialize: true, destroyOnUnmount: false
})(ProfileDataForm)


export default ProfileDataForm