import React from 'react';
import './album-desc.styles.scss';
import starEmpty from '../../assets/icons/star-empty.svg';

const AlbumDesc = ({handleClick, album,  ...otherProps}) => {
    return(
        <div className='album-desc'>
            <img src={album.artworkUrl100 || album.artworkUrl60} alt=""/>
            <div className="album-desc-name">{album.collectionName} </div>
            <div className="album-desc-artist">{album.artistName}</div>  
        </div>
    )
}

export default AlbumDesc;