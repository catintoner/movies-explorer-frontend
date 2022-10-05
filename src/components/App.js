import React from 'react';

import { Route, Switch, withRouter } from 'react-router-dom';  //Route, Switch, useHistory,

import './App.css';

import Main from './main/Main';
import Movies from './movies/Movies';
import Profile from './profile/Profile';
import SavedMovies from './savedMovies/SavedMovies';

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
              setLoggedIn={setLoggedIn}
            />
          </Route>

          <Route path='/movies'>
            <Movies
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              likeBtnClassName='card__btn-like_status_active'
            />
          </Route>
          <Route path='/saved-movies'>
            <SavedMovies
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              likeBtnClassName='card__btn-like_status_delete'
            />
          </Route>
          <Route path='/profile'>
            <Profile
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
