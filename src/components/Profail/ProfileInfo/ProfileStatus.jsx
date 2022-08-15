import React from "react";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status        //создаем локальный мелкий стейт для компоненты
    }

    activateEditMode = () => {
        
         this.setState ({            //метод setState(), куда мы передаем в объект изменяемые свойства, перезаписывает state 
            editMode: true
         })
    }

    deactivateEditMode = () => {
    
        this.setState ({
           editMode: false
        });
        this.props.updateUserStatus(this.state.status)
   }

    onStatusChange = (e) => {

        this.setState({
            status: e.currentTarget.value   //получаем новое вписанное/изменнное значение (с помощью e.currentTarget.value) и меняет локальный state
        })


    }

    componentDidUpdate (prevProps, prevState) {
      
    if (prevProps.status !== this.props.status)
            this.setState({
                status: this.props.status
            })
        }

    

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode }> {this.props.status || "no status"} </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode } value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus; 