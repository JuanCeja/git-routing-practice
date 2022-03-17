import './App.css';
import {
  Switch,
  Route
} from 'react-router-dom'
import Home from './components/home';
import Number from './components/number';
import StyledWord from './components/styledWord';


function App() {
  return (
    <div className="App">
      <div>
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/:numOrWord'>
            <Number />
          </Route>

          <Route exact path='/:word/:color/:backgroundColor'>
            <StyledWord />
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
