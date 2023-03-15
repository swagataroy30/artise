import { BackDropWrapper } from "./Backdrop.style";

const Backdrop = ({ onClose }) => {
  return <BackDropWrapper onClick={onClose} />;
};

export default Backdrop;
