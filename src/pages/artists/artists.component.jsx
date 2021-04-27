import React from 'react';
import './artists.styles.scss';


class Artists extends React.Component{
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
        return(
            <div>
                This is artists
            </div>
        )
    }
}

export default Artists;