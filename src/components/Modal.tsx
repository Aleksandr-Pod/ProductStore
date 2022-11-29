import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { InputForm } from './InputForm';

interface IProps {
  onEsc: (evt: {code: string}) =>  void;
  handleOverlayClick: (evt: { target: any; currentTarget: any; }) => void;
}
const modalRoot = document.getElementById('modal-root')!;

export const Modal = ({ onEsc, handleOverlayClick }: IProps) => { 

    useEffect(() => {
      window.document.addEventListener('keydown', onEsc);
      return () => {
        window.document.removeEventListener('keydown', onEsc)
      }
    }, [onEsc])
    return createPortal(
      <div className="Overlay" onClick={ handleOverlayClick }>
        <div className="Modal">
            <InputForm/>
        </div>
      </div>, modalRoot
    )
}