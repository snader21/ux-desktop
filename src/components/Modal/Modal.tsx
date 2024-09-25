"use client";

import { useRef } from "react";
import { createPortal } from "react-dom";

import CloseIcon from "../Icons/CloseIcon";
import { useOutsideClick } from "../../hooks/useOutsideClick/useOutsideClick";

import styles from "./styles.module.scss";

function YDNNModal({
  children,
  closeModal,
}: {
  children: React.ReactNode;
  closeModal: () => void;
}) {
  const modalRef = useRef(null);
  useOutsideClick(modalRef, closeModal);
  return createPortal(
    <div className={styles.modal} ref={modalRef}>
      <div className={styles["modal-close-icon"]}>
        <CloseIcon fill="#0a3aa3" width={20} height={20} onClick={closeModal} />
      </div>
      <div>{children}</div>
    </div>,
    document.body
  );
}

export default YDNNModal;
