import React from 'react';
import './search-box.styles.scss';
import { Link } from 'react-router-dom';
import Input from '../input/input.component';
import axios from 'axios';


class SearchBox extends React.Component {


    // const {displayName, email, password, confirmPassword} = this.state
    constructor(){
        super();

        this.state = {
            activeButton: '',
            buttonTypes: ['albums', 'artists', 'all'],
            searchWord: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]:value})
    }

    handleButtonClick = event => {
        axios.get('http://localhost:4000/api/itunes/abc').then(res => {
            console.log(res);
        })
        /*
        let request = new Request('https://itunes.apple.com/search?term=jack+johnson');
        fetch(request).then(res => res.json())
        .then(data => console.log(data));
        */
        console.log(event.nativeEvent.target.innerHTML);
    }

    render(){
        const {buttonTypes, activeButton, searchWord} = this.state;
        return(
            <div>  
                <div className="input">
                    <Input
                    type='text'
                    name='searchWord'
                    label='Word to search'
                    value={searchWord}
                    handleChange={this.handleChange}
                    required/>
                </div>      
                <div className="buttons">
                {
                    buttonTypes.map((button,i) => 
                        (<Link onClick={this.handleButtonClick} className="option" key={i} to={'/search/' + button}>{button}</Link>)
                    )
                }
                </div>
            </div>
        )        
    }

    
}

export default SearchBox;