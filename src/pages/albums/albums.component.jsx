import React from 'react';
import './albums.styles.scss';
import axios from 'axios';
import { createStructuredSelector } from 'reselect';
import { selectSearchedAlbums, selectViewedAlbum } from '../../redux/search/search.selectors';
import { connect } from 'react-redux';
import Album from '../../components/album/album.component';
import { setViewedAlbum } from '../../redux/search/search.actions';


class Albums extends React.Component {
    // const {displayName, email, password, confirmPassword} = this.state
    constructor(){
        super();
    }

    getAlbumSongs(event, albumId){
        axios.get(`http://localhost:4000/api/itunes/album/${albumId}`)
        .then(res => {
            const album = res.data.results;
            console.log(album);
            this.props.setViewedAlbum(album);
        }); 
    }

    render(){
        const {searchedAlbums, viewedAlbum } = this.props;
        return(
            <div className='albums-container'>
                <div className="albums-list">
                    {
                        searchedAlbums.map((album,i) => 
                        <Album 
                        handleClick={(e) => this.getAlbumSongs(e,album.collectionId)}
                        key={i} 
                        album={album}></Album>)
                    }                
                </div>
                <div className="album-songs">
                    {
                        viewedAlbum.map((song,i) => 
                            <div key={i}>{song.trackName? song.trackName : ''}</div>
                        )
                    }
                </div>

            </div>
        )        
    }
 
}

const mapStateToProps = createStructuredSelector({
    searchedAlbums: selectSearchedAlbums,
    viewedAlbum: selectViewedAlbum
    
});

const mapDispatchToProps = dispatch => ({
    setViewedAlbum: (album) => dispatch(setViewedAlbum(album)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Albums);