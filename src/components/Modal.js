import React, {Component} from 'react';
import './modal.scss';

const Modal = props => {
    return (
        <div className="success-modal-wrapper modal-wrapper">
            <a className="modal-close-btn" onClick={(status) => props.close(false)}>x</a>
            <div className="modal-top-pane">
                <i class="material-icons">add_alert</i>
                <h4>{'We got you!'}</h4>
            </div>
            <div className="modal-bottom-pane">                  
                <p>
                    You are a winner
                </p>
                <button className="btn btn--stripe margin-l-r-15" onClick={(status) => props.close(false)} >
                    Ok
                </button>
            </div>
        </div>
     )
}
export default Modal;