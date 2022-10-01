import React from 'react';

import { Route, Switch, withRouter } from 'react-router-dom';  //Route, Switch, useHistory,

import './App.css';

import Main from './main/Main';
import Movies from './movies/Movies';

function App() {
  return (
    <div className='page'>
      <div className='page__container'>

        <Switch>
          <Route exact path='/'>
            <Main
            />
          </Route>
          <Route path='/movies'>
            <Movies
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
