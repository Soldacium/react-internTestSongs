import React from 'react';
import Nav from '../../components/nav/nav.component';
import './search.styles.scss';
import { Route, Switch} from 'react-router-dom';
import Albums from '../albums/albums.component';
import Artists from '../artists/artists.component';

const SearchPage = ({match}) => {
    return(
        <div>
            <Nav></Nav>
            <div>
                Search Page
            </div>        
            <div>
                <Switch>
                    <Route path={match.url + "/albums/:name"} component={Albums} /> 
                    <Route path={match.url + "/artists/:name"} component={Artists} /> 
                </Switch>
                
            </div>    
        </div>
    )
}

export default SearchPage;