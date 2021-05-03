import React from 'react';
import './albums.styles.scss';
import axios from 'axios';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectSearchedAlbums, selectViewedAlbum } from '../../redux/search/search.selectors';
import { selectSavedAlbums } from '../../redux/saved/saved.selectors';
import { saveAlbum, unsaveAlbum } from '../../redux/saved/saved.actions';
import { setViewedAlbum } from '../../redux/search/search.actions';
import AlbumItem from '../../components/album-item/album-item.component';
import Song from '../../components/song/song.component';
import AlbumDesc from '../../components/album-desc/album-desc.component';



class AlbumsPage extends React.Component {

    getAlbumSongs(event, albumId){
        axios.get(`http://localhost:4000/api/itunes/album/${albumId}`)
        .then(res => {
            const album = res.data.results;
            this.props.setViewedAlbum(album);
        }); 
    }

    checkIfSaved(savedAlbums, album){
        const foundAlbum = savedAlbums.filter(item => item.collectionId === album.collectionId);
        return foundAlbum.length > 0 ? true : false;
    }

    saveHandler(savedAlbums, album){
        const saved = this.checkIfSaved(savedAlbums, album)
        if(saved){
            this.props.unsaveAlbum(album);
        }else{
            this.props.saveAlbum(album);
        }
    }


    render(){
        const {searchedAlbums, viewedAlbum, savedAlbums } = this.props;
        const viewedAlbumCollection = viewedAlbum[0];
        return(
            <div className='albums-container'>
                <div className="albums-list">
                    {
                        searchedAlbums.map((album,i) => 
                        <AlbumItem
                        handleClick={(e) => this.getAlbumSongs(e,album.collectionId)}
                        handleSave={() => this.saveHandler(savedAlbums, album)}
                        key={i}
                        isFavourite={this.checkIfSaved(savedAlbums,album)}
                        album={album}/>)
                    }                
                </div>
                <div className="album-songs">
                    {
                        viewedAlbumCollection ?
                        <AlbumDesc album={viewedAlbumCollection}></AlbumDesc>
                        : <div></div>
                    }
                    {
                        viewedAlbum.map((song,i) => 
                            i > 0 ?<Song song={song} key={song.trackId}></Song> : <div></div>
                        )
                    }
                </div>
            </div>
        )        
    }
}

const mapStateToProps = createStructuredSelector({
    searchedAlbums: selectSearchedAlbums,
    viewedAlbum: selectViewedAlbum,
    savedAlbums: selectSavedAlbums
});

const mapDispatchToProps = dispatch => ({
    setViewedAlbum: (album) => dispatch(setViewedAlbum(album)),
    saveAlbum: (album) => dispatch(saveAlbum(album)),
    unsaveAlbum: (album) => dispatch(unsaveAlbum(album))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsPage);