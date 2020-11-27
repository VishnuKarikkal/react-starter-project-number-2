// import Navbar from './components/Navbar/Index';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/index';
import Signin from './pages/Signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact></Route>
        <Route path='/signin' component={Signin} exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
