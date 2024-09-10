import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ open, isClose, children }) => {
  return createPortal(
    <>
      {open && (
        <>
          <div className="relative min-h-[200px] min-w-[80%] bg-white z-50">
            <div className="flex justify-end p-3">
              <AiOutlineClose onClick={isClose} />
            </div>
            {children}
          </div>
          <div
            onClick={isClose}
            className="absolute top-0 backdrop-blur-md z-40 h-screen w-screen"
          />
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
