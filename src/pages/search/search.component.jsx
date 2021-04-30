import React from 'react';
import './search.styles.scss';
import { Route, Switch } from 'react-router-dom';
import AlbumsPage from '../albums/albums.component';
import ArtistsPage from '../artists/artists.component';
import SearchBox from '../../components/search-box/search-box.component';


const SearchPage = ({match}) => {
    return(
        <div className='container'>
            <div className="search-box-container">
                <Route path='/search' component={SearchBox}></Route>
            </div>        
            <div className="routes">
                <Switch>
                    <Route path={match.url + "/albums"} component={AlbumsPage} /> 
                    <Route path={match.url + "/artists"} component={ArtistsPage} /> 
                </Switch>
            </div>    
        </div>
    )
}



export default SearchPage;