import './App.scss';
import { Route, Switch } from 'react-router-dom';
import SearchPage from './pages/search/search.component'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/search/' component={SearchPage}/>
      </Switch>
    </div>
  );
}

export default App;
