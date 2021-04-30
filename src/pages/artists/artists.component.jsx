import React from 'react';
import './artists.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectSearchedArtists } from '../../redux/search/search.selectors';
import { connect } from 'react-redux';
import { selectSavedArtists } from '../../redux/saved/saved.selectors';
import { saveArtist, unsaveArtist } from '../../redux/saved/saved.actions';

import ArtistItem from '../../components/artist-item/artist-item.component';


class ArtistsPage extends React.Component{
    checkIfSaved(savedArtists, artist){
        const foundArtist = savedArtists.filter(item => item.artistId === artist.artistId);
        return foundArtist.length > 0 ? true : false;
    }

    saveHandler(savedArtists, artist){
        const saved = this.checkIfSaved(savedArtists, artist)
        if(saved){
            this.props.unsaveArtist(artist);
        }else{
            this.props.saveArtist(artist);
        }
    }

    render(){
        const { searchedArtists, savedArtists } = this.props;
        return(
            <div className='artists-container'>
                {
                    searchedArtists.map((artist,i) => 
                    <ArtistItem 
                    handleSave={() => this.saveHandler(savedArtists,artist)}
                    isFavourite={this.checkIfSaved(savedArtists, artist)}
                    key={i} 
                    artist={artist}/>)
                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    saveArtist: (artist) => dispatch(saveArtist(artist)),
    unsaveArtist: (artist) => dispatch(unsaveArtist(artist))
});

const mapStateToProps = createStructuredSelector({
    searchedArtists: selectSearchedArtists,
    savedArtists: selectSavedArtists
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsPage);