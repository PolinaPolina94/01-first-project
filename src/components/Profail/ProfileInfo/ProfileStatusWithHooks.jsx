import React from "react";
import { useEffect } from "react";
import { useState } from "react";


const ProfileStatusWithHooks = (props) => {

 let [editMode, setEditMode] = useState(false);   //hook useState()
 let [status, setStatus] = useState(props.status)

 
 useEffect(()=> {
    setStatus(props.status)
 }, [props.status])


 
    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)

    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)   //получаем новое вписанное/изменнное значение (с помощью e.currentTarget.value) и меняет локальный state
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={ activateEditMode }> {props.status || "no status"} </span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                </div>
            }
        </div>
    )
}



export default ProfileStatusWithHooks; 
