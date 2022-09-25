import React from 'react';

import { Route, Switch, withRouter } from 'react-router-dom';  //Route, Switch, useHistory,

import './App.css';

import Main from './main/Main';

function App() {
  return (
    <div className='page'>
      <div className='page__container'>

        <Switch>
          <Route exact path='/'>
            <Main
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
