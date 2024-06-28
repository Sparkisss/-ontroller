import ReactDOM from 'react-dom';   

const portal = document.getElementById('portal') as HTMLElement

const Modal = () => {


    return ReactDOM.createPortal(
        <div>
            This is popup
        </div>,
    portal
    )
};

export default Modal;