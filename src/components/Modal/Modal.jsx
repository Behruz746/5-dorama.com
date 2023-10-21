import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../AppContext";

function Modal() {
  const { setModalSec } = useContext(AppContext);

  return (
    <div className="Modal">
      <div className="modal__container">
        <button
          className="modal__btn"
          type="button"
          onClick={() => setModalSec(false)}
        >
          <img
            className="modal__icon"
            src="./images/svg/x__icon.svg"
            alt="x icon"
          />
        </button>
        <NavLink
          to="https://www.buymeacoffee.com/5dorama"
          target="_blank"
          onClick={() => setModalSec(false)}
        >
          <div className="modal__image"></div>
        </NavLink>
      </div>
    </div>
  );
}

export default Modal;
