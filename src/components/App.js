import React from 'react';

import { Route, Switch, withRouter, useHistory } from 'react-router-dom';  //Route, Switch, useHistory,

import './App.css';
import Login from './login/Login';
import Main from './main/Main';
import Movies from './movies/Movies';
import PageNotFound from './pageNotFound/PageNotFound';
import Profile from './profile/Profile';
import Register from './register/Register';
import SavedMovies from './savedMovies/SavedMovies';

function App() {

  const history = useHistory();

  function handleReturnBack() {
    history.goBack();
  }

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

          <Route exact path='/movies'>
            <Movies
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              likeBtnClassName='card__btn-like_status_active'
            />
          </Route>
          <Route exact path='/saved-movies'>
            <SavedMovies
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              likeBtnClassName='card__btn-like_status_delete'
            />
          </Route>
          <Route exact path='/profile'>
            <Profile
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
            />
          </Route>
          <Route exact path='/sign-up'>
            <Register
            />
          </Route>
          <Route exact path='/sign-in'>
            <Login
            />
          </Route>
          <Route path='*'>
            <PageNotFound
            handleReturnBack={handleReturnBack}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
