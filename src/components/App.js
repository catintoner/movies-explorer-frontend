import React from 'react';

import { Route, Switch, withRouter, useHistory } from 'react-router-dom';

import { auth } from '../utils/Auth';
import { mainApi } from '../utils/MainApi';

import './App.css';
import Login from './login/Login';
import Main from './main/Main';
import Movies from './movies/Movies';
import PageNotFound from './pageNotFound/PageNotFound';
import Profile from './profile/Profile';
import Register from './register/Register';
import SavedMovies from './savedMovies/SavedMovies';

import PopupSuccess from './popupSuccess/PopupSuccess';

import ProtectedRoute from './protectedRoute/ProtectedRoute';

import { CurrentUserContext } from './contexts/CurrentUserContext';

function App() {

  const history = useHistory();

  function handleReturnBack() {
    history.goBack();
  }


  const [loggedIn, setLoggedIn] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '' });

  const [popupOpen, setPopupState] = React.useState(false);

  const [movies, setMovies] = React.useState([]);

  const [savedMovies, setSavedMovies] = React.useState([]);

  React.useEffect(() => {
    handleCheckToken();
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      mainApi.getUserInfo()
        .then((userInfo) => {
          localStorage.setItem('userInfo', JSON.stringify(userInfo));
          setCurrentUser(JSON.parse(localStorage.getItem('userInfo')));
        })
        .catch((err) => {
          console.log(err);
        })

      getSavedMovies();

    }
  }, [loggedIn]);

  function handleCheckToken() {
    const userId = localStorage.getItem('userId');

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

  function getSavedMovies() {
    mainApi.getMovies()
      .then((movies) => {
        setSavedMovies(movies);
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
              movies={movies}
              setMovies={setMovies}
              setSavedMovies={setSavedMovies}
              savedMovies={savedMovies}
              likeBtnClassName='card__btn-like_status_active'
            >
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path='/saved-movies'
              movies={savedMovies}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
              getSavedMovies={getSavedMovies}
              component={SavedMovies}
              loggedIn={loggedIn}
              likeBtnClassName='card__btn-like_status_delete'
            >
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path='/profile'
              component={Profile}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              setCurrentUser={setCurrentUser}
              setPopupState={setPopupState}
            >
            </ProtectedRoute>

            <Route exact path='/sign-up'>
              <Register
              />
            </Route>
            <Route exact path='/sign-in'>
              <Login
              setLoggedIn={setLoggedIn}
              />
            </Route>
            <Route path='*'>
              <PageNotFound
                handleReturnBack={handleReturnBack}
              />
            </Route>
          </Switch>

          <PopupSuccess
            popupOpen={popupOpen}
            setPopupState={setPopupState}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
