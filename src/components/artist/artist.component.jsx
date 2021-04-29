import React from 'react';
import './artist.styles.scss';
import starEmpty from '../../assets/icons/star-empty.svg';

const Artist = ({handleClick, artist, ...otherProps}) => {
    return(
        <div className='artist'>
            {artist.artistName}
        </div>
    )
}

export default Artist;