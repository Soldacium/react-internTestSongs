import React from 'react';
import './song.styles.scss';

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

const Song = ({song, ...otherProps}) => {
    return(
        <div className='album-song'>
            <div className="song-info">
                <div className="song-info-name">{song.trackName}</div>
                <div className="song-info-time">{millisToMinutesAndSeconds(song.trackTimeMillis) }</div>      
            </div>
        </div>
    )
}

export default Song;