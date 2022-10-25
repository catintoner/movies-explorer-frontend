import React from 'react';

import { Route, Switch, withRouter, useHistory } from 'react-router-dom';  //Route, Switch, useHistory,

import { auth } from '../utils/Auth';

import './App.css';
import Login from './login/Login';
import Main from './main/Main';
import Movies from './movies/Movies';
import PageNotFound from './pageNotFound/PageNotFound';
import Profile from './profile/Profile';
import Register from './register/Register';
import SavedMovies from './savedMovies/SavedMovies';

import ProtectedRoute from './protectedRoute/ProtectedRoute';

function App() {

  const history = useHistory();

  function handleReturnBack() {
    history.goBack();
  }


  const [loggedIn, setLoggedIn] = React.useState(null);

  React.useEffect(() => {
    handleCheckToken();
  }, [loggedIn]);

  function handleCheckToken() {
    const userId = localStorage.getItem('user');

    if (userId && userId !== null) {
      return auth.checkToken(userId)
        .then(() => {
          setLoggedIn(true);
          history.push("/movies");
        })

        .catch((err) => {
          console.log(err);
        })
    } else {
      setLoggedIn(false);
    }
  }

  function handleRegistrationSubmit(email, password, name) {
    auth.createUser(email, password, name)
      .then((res) => {
        history.push('/sign-in');
      })

      .catch((err) => {
        console.log(err);
      })
  }

  function handleLoginSubmit(email, password) {
    auth.loginUser(email, password)
      .then(() => {
        setLoggedIn(true);
        history.push('/movies');
      })

      .catch((err) => {
        console.log(err);
      })
  }

  function handleLogout() {
    auth.logoutUser()
      .then(() => {
        localStorage.removeItem("user");
        setLoggedIn(false);
      })

      .catch((err) => {
        console.log(err);
      })
  }


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

          <ProtectedRoute
            exact
            path='/movies'
            component={Movies}
            loggedIn={loggedIn}
            likeBtnClassName='card__btn-like_status_active'>
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
            likeBtnClassName='card__btn-like_status_delete'>
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path='/profile'
            component={Profile}
            loggedIn={loggedIn}
            handleLogout={handleLogout}
          >
          </ProtectedRoute>

          <Route exact path='/sign-up'>
            <Register
              onSubmit={handleRegistrationSubmit}
            />
          </Route>
          <Route exact path='/sign-in'>
            <Login
              onSubmit={handleLoginSubmit}
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
