import React from 'react';
import './search-box.styles.scss';
import { Link } from 'react-router-dom';
import Input from '../input/input.component';
import axios from 'axios';
import { connect } from 'react-redux';
import { searchAlbums, searchArtists } from '../../redux/search/search.actions';


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
        event.preventDefault();
        const { buttonTypes, searchWord} = this.state;
        if(event.nativeEvent.target.innerHTML === buttonTypes[0]){
            axios.get(`http://localhost:4000/api/itunes/albums/{${searchWord}}`)
            .then(res => {
                const array = res.data || [];
                this.props.searchAlbums(array);
            });            
        } else{
            axios.get(`http://localhost:4000/api/itunes/artists/{${searchWord}}`)
            .then(res => {
                const array = res.data || [];
                this.props.searchArtists(array);
            });   
        }
    }

    render(){
        const {buttonTypes, searchWord} = this.state;
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
                        (<Link onClick={(e) => this.handleButtonClick(e)} className="option" key={i} to={'/search/' + button}>{button}</Link>)
                    )
                } 
                </div>
            </div>
        )        
    }
}

const mapDispatchToProps = dispatch => ({
    searchArtists: (artists) => dispatch(searchArtists(artists)),
    searchAlbums: (albums) => dispatch(searchAlbums(albums)),
});

export default connect(null, mapDispatchToProps)(SearchBox);