import React from 'react';
import './search-box.styles.scss';
import { Link } from 'react-router-dom';
import Input from '../input/input.component';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlbums, setArtists } from '../../redux/search/search.actions';


class SearchBox extends React.Component {
    constructor(){
        super();
        this.state = {
            buttonTypes: ['albums', 'artists'],
            searchWord: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]:value})
    }

    handleButtonClick = event => {
        const { buttonTypes, searchWord} = this.state;
        if(event.nativeEvent.target.innerHTML === buttonTypes[0]){
            axios.get(`http://localhost:4000/api/itunes/albums/{${searchWord}}`)
            .then(res => {
                const array = res.data || [];
                this.props.setAlbums(array);
            });            
        } else {
            axios.get(`http://localhost:4000/api/itunes/artists/{${searchWord}}`)
            .then(res => {
                const array = res.data || [];
                this.props.setArtists(array);
            });   
        }
    }

    render(){
        const {buttonTypes, searchWord} = this.state;
        return(
            <div className="search-box">  
                <div className="input">
                    <Input
                    type='text'
                    name='searchWord'
                    label='Search query'
                    value={searchWord}
                    handleChange={this.handleChange}
                    required/>
                </div>      
                <div className="buttons">
                {
                    buttonTypes.map((button,i) => 
                    (<Link 
                    onClick={(e) => this.handleButtonClick(e)} 
                    className="option" 
                    key={i} 
                    to={'/search/' + button}>{button}</Link>)
                    )
                } 
                </div>
            </div>
        )        
    }
}

const mapDispatchToProps = dispatch => ({
    setArtists: (artists) => dispatch(setArtists(artists)),
    setAlbums: (albums) => dispatch(setAlbums(albums)),
});

export default connect(null, mapDispatchToProps)(SearchBox);