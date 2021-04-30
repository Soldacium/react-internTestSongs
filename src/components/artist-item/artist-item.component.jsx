import React from 'react';
import './artist-item.styles.scss';
import linkIcon from '../../assets/icons/link.svg';
import starEmpty from '../../assets/icons/star-empty.svg';
import starFull from '../../assets/icons/star-full.svg';

const ArtistItem = ({handleSave, artist, isFavourite, ...otherProps}) => {
    return(
        <div className='artist'>
            <div className="artist-name">{artist.artistName}</div>
            <div className="artist-genre">{artist.primaryGenreName}</div>
            <a className="artist-link" rel="noreferrer" target="_blank" href={artist.artistLinkUrl}>
                <img src={linkIcon} alt=""/>
            </a>
            <div className={`artist-favourite ${isFavourite}`} onClick={handleSave}>
                {
                    isFavourite ?
                    <img src={starFull} alt=""/> :
                    <img src={starEmpty} alt=""/>
                }
            </div>
        </div>
    )
}

export default ArtistItem;