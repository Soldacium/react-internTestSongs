import React from 'react';
import './artists.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectSearchedArtists } from '../../redux/search/search.selectors';
import { connect } from 'react-redux';
import ArtistItem from '../../components/artist-item/artist-item.component';
import { selectSavedArtists } from '../../redux/saved/saved.selectors';
import { saveArtist, unsaveArtist } from '../../redux/saved/saved.actions';


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

    saveHandler(event, artist, isFavourite){
        console.log(artist,isFavourite)
        if(isFavourite){
            console.log('yaas')
            this.props.unsaveArtist(artist);
        }else{
            this.props.saveArtist(artist);
        }
    }

    render(){
        const { searchedArtists, savedArtists } = this.props;
        console.log(savedArtists);
        return(
            <div className='artists-container'>
                {
                    searchedArtists.map((artist,i) => 
                    <ArtistItem 
                    handleSave={(e) => this.saveHandler(e,artist,savedArtists.includes(artist))}
                    isFavourite={savedArtists.includes(artist)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Artists);