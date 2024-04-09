import React from 'react';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Create from './components/Create';
import NotFound from './components/NotFound';
import FactDetails from './components/FactDetails';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          
          <Route exact path="/">
            <Home /> 
          </Route>

          <Route path="/create"> 
            <Create />
          </Route>

          <Route path="/facts/:id"> 
            <FactDetails />
          </Route>

          <Route path="/*">
            <NotFound />
          </Route>

        </Switch>
      </div>
    </div>
    </Router>
  )
}

export default App;