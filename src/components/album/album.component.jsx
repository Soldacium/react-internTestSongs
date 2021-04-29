import React from 'react';
import './album.styles.scss';
import starEmpty from '../../assets/icons/star-empty.svg';

const Album = ({handleClick, handleSave, album, ...otherProps}) => {
    return(
        <div className='album'>
            <img src={album.artworkUrl100 || album.artworkUrl60} alt=""/>
            <div className="album-favourite">
                <img src={starEmpty} alt=""/>
            </div>
            <div className="album-info">
                <div className="album-info-artist">{album.artistName}</div>
                <div className="album-info-name">{album.collectionName}</div>
                <button onClick={handleClick}>Click for more info</button>           
            </div>
            

        </div>
    )
}

export default Album;