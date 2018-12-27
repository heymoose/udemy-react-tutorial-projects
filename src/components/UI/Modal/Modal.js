import React, { Component } from 'react';
import style from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    
    // Only update the modal component if it is shown
    // This optimization prevents the OrderSummary component from
    // getting updated even when it's info is not on the screen
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    render() {
        return (
            <>
                <Backdrop 
                    show={this.props.show}
                    clicked={this.props.modalClosed} />
                <div
                    className={style.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default Modal;