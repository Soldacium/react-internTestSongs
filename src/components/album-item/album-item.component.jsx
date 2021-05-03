import React from 'react';
import './album-item.styles.scss';
import starEmpty from '../../assets/icons/star-empty.svg';
import starFull from '../../assets/icons/star-full.svg';

const AlbumItem = ({handleClick, handleSave, album, isFavourite, ...otherProps}) => {
    return(
        <div className='album' key={otherProps.key}>
            <img src={album.artworkUrl100 || album.artworkUrl60} alt=""/>
            <div className={`album-favourite ${isFavourite}`} onClick={handleSave}>
                {
                    isFavourite ?
                    <img src={starFull} alt=""/> :
                    <img src={starEmpty} alt=""/>
                }
            </div>
            <div className="album-info">
                <div className="album-info-artist">{album.artistName}</div>
                <div className="album-info-name">{album.collectionName}</div>    
            </div>
            <button className="album-view-details" onClick={handleClick}>View album</button>    

        </div>
    )
}

export default AlbumItem;