import React from 'react';
import './saved.styles.scss';
import ArtistItem from '../../components/artist-item/artist-item.component';
import AlbumItem from '../../components/album-item/album-item.component';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectSavedAlbums, selectSavedArtists } from '../../redux/saved/saved.selectors';
import { unsaveAlbum, unsaveArtist } from '../../redux/saved/saved.actions';


class SavedPage extends React.Component{

    unsaveArtistHandler(artist){
        this.props.unsaveArtist(artist);
    }

    unsaveAlbumHandler(album){
        this.props.unsaveAlbum(album);
    }

    render(){
        const { savedAlbums, savedArtists } = this.props;
        return(
            <div className='saved-container'>
                <div className="saved-container-title">
                    <h1>Your saved content</h1>
                </div>
                <div className="saved-artists">
                    {
                        savedArtists.map((artist,i) => 
                        <ArtistItem 
                        handleSave={() => this.unsaveArtistHandler(artist)}
                        isFavourite={true}
                        key={i} 
                        artist={artist}/>)
                    }
                </div>
                <div className="saved-albums">
                    {
                        savedAlbums.map((album,i) => 
                        <AlbumItem
                        handleSave={() => this.unsaveAlbumHandler(album)}
                        isFavourite={true}
                        key={i}
                        album={album}/>)
                    }                      
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    unsaveAlbum: (album) => dispatch(unsaveAlbum(album)),
    unsaveArtist: (artist) => dispatch(unsaveArtist(artist))
});

const mapStateToProps = createStructuredSelector({
    savedAlbums: selectSavedAlbums,
    savedArtists: selectSavedArtists
});

export default connect(mapStateToProps, mapDispatchToProps)(SavedPage);