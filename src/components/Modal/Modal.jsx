import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../AppContext";
import './styles.scss'

function Modal() {
  const { setModalSec, modalSec } = useContext(AppContext);

  const linkHandel = () => {
    setModalSec(false); 
    // document.querySelector("body").style.overflow = "auto";
  };

  return (
    <div className={modalSec ? "Modal" : "Modal--over"} onClick={()=> linkHandel()}>
      <audio id="addSound" src="./audio/notifications-sound-127856.mp3"></audio>
      <audio id="addSound01" src="./audio/notifications-sound-127856-01.mp3"></audio>
      <div className={ modalSec ? "modal__container--active" : "modal__container"}>
        <button
          className="modal__btn"
          type="button"
          onClick={() => linkHandel()}
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
          onClick={() => linkHandel()}
        >
          <div className="modal__image"></div>
        </NavLink>
      </div>
    </div>
  );
}

export default Modal;
