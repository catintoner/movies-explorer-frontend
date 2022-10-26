import React from "react";
import { withRouter } from "react-router-dom";

import './PopupSuccess.css';

import promoLogo from '../../images/promo__logo.svg';

function PopupSuccess(props) {

  React.useEffect(() => {
    if (props.popupOpen) {
      function closeOnEsc(evt) {
        if (evt.key === "Escape") {
          props.setPopupState(false);
        }
      }

      document.addEventListener('keydown', closeOnEsc);

      return () => {
        document.removeEventListener('keydown', closeOnEsc);
      }
    }
  }, [props.popupOpen]);

  function onCloseButton() {
    if (props.popupOpen && props.popupOpen !== null) {
      props.setPopupState(false);
    }
  }

  return (
    <section
      className={`popup ${props.popupOpen && 'popup_opened'}`}
    >
      <button
        className="popup__exit"
        type="button"
        onClick={onCloseButton}
      >
      </button>
      <div
        className="popup__container">
        <img
          className="popup__registration-img"
          src={promoLogo}
          alt="Регистрация"
        />
        <h3
          className="popup__title">
          Данные успешно изменены!
        </h3>
      </div>
    </section>
  )
}

export default withRouter(PopupSuccess);
