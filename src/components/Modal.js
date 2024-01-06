import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import style from './Modal.module.css';

export default function Modal({ open, onClose }) {

  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open])

  return createPortal(
    <dialog ref={dialog} onClose={onClose} className={style.modal}>
      {open ? <><h2>Invaild City Name</h2>
      <form className={style.action}>
        <button onClick={onClose}>I got it</button>
      </form></>
      : null}
    </dialog>
  , document.getElementById('modal'));
}