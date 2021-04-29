import React from 'react';
import './artists.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectSearchedArtists } from '../../redux/search/search.selectors';
import { connect } from 'react-redux';
import Artist from '../../components/artist/artist.component';


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
        const { searchedArtists } = this.props;
        return(
            <div className='artists-container'>
                {
                    searchedArtists.map((artist,i) => <Artist key={i} artist={artist}></Artist>)
                }
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    searchedArtists: selectSearchedArtists,
});

export default connect(mapStateToProps)(Artists);