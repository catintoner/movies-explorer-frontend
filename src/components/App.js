import React from 'react';

import { Route, Switch, withRouter } from 'react-router-dom';  //Route, Switch, useHistory,

import './App.css';

import Main from './main/Main';
import Movies from './movies/Movies';

function App() {

  // const history = useHistory();

  const [loggedIn, setLoggedIn] = React.useState(true);

  return (
    <div className='page'>
      <div className='page__container'>

        <Switch>
          <Route exact path='/'>
            <Main
              loggedIn={loggedIn}
            />
          </Route>

          <Route path='/movies'>
            <Movies
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
