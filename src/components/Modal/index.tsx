import { ReactNode, useEffect, useRef, useState } from "react";
import ReactModal from "react-modal";

interface ModalProps {
  children: ReactNode;
  setIsOpen: () => void;
  isOpen: boolean;
}

interface PrevProps {
  isOpen: boolean;
}

function Modal({ children, setIsOpen, isOpen }: ModalProps) {
  const [modalStatus, setModalStatus] = useState(isOpen);
  const prevProps = useRef<PrevProps>();

  useEffect(() => {
    if (prevProps.current) {
      prevProps.current.isOpen = isOpen;
      if (prevProps.current.isOpen !== isOpen) {
        setModalStatus(isOpen);
      }
    }
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "#F0F0F5",
          color: "#000000",
          borderRadius: "8px",
          width: "736px",
          border: "none",
        },
        overlay: {
          backgroundColor: "#121214e6",
        },
      }}
    >
      {children}
    </ReactModal>
  );
}

export default Modal;