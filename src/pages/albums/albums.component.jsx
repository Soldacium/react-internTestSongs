import React from 'react';
import './albums.styles.scss';

import { createStructuredSelector } from 'reselect';
import { selectSearchedAlbums } from '../../redux/search/search.selectors';
import { connect } from 'react-redux';


const Albums = ({searchedAlbums}) => {
    // const {displayName, email, password, confirmPassword} = this.state
    return(
        <div>
            This is albums
            {
                searchedAlbums.map((album,i) => <div key={i}>{album.artistId}</div>)
            }
        </div>
    ) 
}

const mapStateToProps = createStructuredSelector({
    searchedAlbums: selectSearchedAlbums,
});

export default connect(mapStateToProps)(Albums);