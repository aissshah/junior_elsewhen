import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Homepage from './Homepage';
import Contributorspage from './Contributorspage';

const App = () => {
//if the path starts with "contributors", it will load contributors page, otherwise home page is loaded
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/contributors'>
          <Contributorspage />
        </Route>
        <Route path='/'>
          <Homepage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
