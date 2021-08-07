import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
