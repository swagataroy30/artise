import ReactDOM from "react-dom";
import Backdrop from "../Utils/Backdrop";
import ModalOverlay from "../Utils/ModalOverlay";
import Login from "./Login";
import Signup from "./Signup";

const AuthModal = ({ onCloseModal, type, onOpenModal }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onCloseModal} />, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(
        <ModalOverlay>
          {type === "Signup" ? (
            <Signup onCloseModal={onCloseModal} onOpenModal={onOpenModal} />
          ) : (
            <Login onCloseModal={onCloseModal} onOpenModal={onOpenModal} />
          )}
        </ModalOverlay>,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default AuthModal;
