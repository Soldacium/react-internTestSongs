import React from 'react';
import './albums.styles.scss';


class Albums extends React.Component{
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    render(){
        // const {displayName, email, password, confirmPassword} = this.state
        return(
            <div>
                This is albums
            </div>
        )
    }
}

export default Albums;