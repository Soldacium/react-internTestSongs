import React from 'react';
import './albums.styles.scss';
import axios from 'axios';
import { createStructuredSelector } from 'reselect';
import { selectSearchedAlbums, selectViewedAlbum } from '../../redux/search/search.selectors';
import { connect } from 'react-redux';
import AlbumItem from '../../components/album-item/album-item.component';
import { setViewedAlbum } from '../../redux/search/search.actions';
import Song from '../../components/song/song.component';
import AlbumDesc from '../../components/album-desc/album-desc.component';
import { selectSavedAlbums } from '../../redux/saved/saved.selectors';
import { saveAlbum, unsaveAlbum } from '../../redux/saved/saved.actions';


class Albums extends React.Component {

    getAlbumSongs(event, albumId){
        axios.get(`http://localhost:4000/api/itunes/album/${albumId}`)
        .then(res => {
            const album = res.data.results;
            console.log(album);
            this.props.setViewedAlbum(album);
        }); 
    }

    saveHandler(event, album, isFavourite){
        console.log(album,isFavourite)
        if(isFavourite){
            console.log('yaas')
            this.props.unsaveAlbum(album);
        }else{
            this.props.saveAlbum(album);
        }
    }

    render(){
        const {searchedAlbums, viewedAlbum, savedAlbums } = this.props;
        const viewedAlbumCollection = viewedAlbum[0];
        console.log(savedAlbums)
        return(
            <div className='albums-container'>
                <div className="albums-list">
                    {
                        searchedAlbums.map((album,i) => 
                        <AlbumItem
                        handleClick={(e) => this.getAlbumSongs(e,album.collectionId)}
                        handleSave={(e) => this.saveHandler(e,album,savedAlbums.includes(album))}
                        key={i}
                        isFavourite={savedAlbums.includes(album)}
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
                            i > 0 ?<Song song={song} key={i}></Song> : <div></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Albums);