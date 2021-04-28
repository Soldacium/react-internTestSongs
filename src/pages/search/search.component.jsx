import React from 'react';
import Nav from '../../components/nav/nav.component';
import './search.styles.scss';
import { Route, Switch} from 'react-router-dom';
import Albums from '../albums/albums.component';
import Artists from '../artists/artists.component';
import SearchBox from '../../components/search-box/search-box.component';

const SearchPage = ({match}) => {
    console.log(match);
    return(
        <div className='container'>
            <Nav></Nav>
            <div className="search-box">
                <Route path='/search' component={SearchBox}></Route>
            </div>        
            <div className="routes">
                <Switch>
                    <Route path={match.url + "/albums"} component={Albums} /> 
                    <Route path={match.url + "/artists"} component={Artists} /> 
                </Switch>
            </div>    
        </div>
    )
}

export default SearchPage;