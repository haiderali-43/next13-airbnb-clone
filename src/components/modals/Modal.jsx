"use client";
import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

const Modal = ({
  isOpen,
  onSubmit,
  onClose,
  title,
  body,
  footer,
  actionLabel,
  secondaryAction,
  secondaryLabel,
  disabled,
}) => {
  const [showModal, setShowModal] = useState(isOpen);
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  // function for closing modal
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      if (typeof onClose === "function") {
        onClose();
      }
    }, 300);
  }, [disabled, onClose]);
  // function for submiting modal
  const handelSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    if (typeof onSubmit === "function") {
      onSubmit();
    }
  }, [disabled, onSubmit]);

  // function for seconadry action
  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70 ">
        <div className="relative w-full md:4/6 lg:w-3/6 xl:2/5 my-6 mx-auto h-full md:h-auto lg:h-auto">
          {/* content */}
          <div
            className={`translate duration-300 h-full ${
              showModal ? "translate-y-0" : "translate-y-full"
            } ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div className="translate h-full md:h-auto lg:h-auto border-0 shadow-lg rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* header */}
              <div className="flex items-center justify-center relative p-6 rounded-t border-b-[1px]">
                {/* button to close modal */}
                <button
                  className="absolute left-9 transition p-1 border-0 hover:opacity-70"
                  onClick={handleClose}
                >
                  <IoMdClose size={18} />
                </button>
                {/* Login Modal */}
                <div className="text-lg font-semibold">{title}</div>
              </div>
              {/* body */}
              <div className="p-6 relative flex-auto">{body}</div>
              {/* footer */}
              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-row items-center gap-4 w-full">
                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handelSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
