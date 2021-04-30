import './App.scss';
import { Route, Switch } from 'react-router-dom';
import SearchPage from './pages/search/search.component';
import SavedPage from './pages/saved/saved.component';
import Nav from './components/nav/nav.component';

const App = () => {
  return (
    <div className="App">
      <Nav></Nav>
      <Switch>
        <Route path='/search/' component={SearchPage}/>
        <Route path='/saved/' component={SavedPage}/>
      </Switch>
    </div>
  );
}

export default App;
