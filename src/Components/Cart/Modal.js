
import React, {Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
}

const ModalOverLays = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClickBackdrop} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverLays>{props.children}</ModalOverLays>, portalElement)}
        </Fragment>

    );
};

export default Modal;