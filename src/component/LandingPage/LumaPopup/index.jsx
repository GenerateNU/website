import React, { Component } from 'react';
import './style.css';

export class LumaPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isOpen: true });
        }, 2000);
    }

    closePopup = () => {
        this.setState({ isOpen: false });
    }

    render() {
        const { isOpen } = this.state;

        if (!isOpen) return null;

        return (
            <div className="luma-popup-overlay" onClick={this.closePopup}>
                <div className="luma-popup-content" onClick={(e) => e.stopPropagation()}>
                    <button className="luma-popup-close" onClick={this.closePopup}>
                        &times;
                    </button>
                    <iframe
                        src="https://luma.com/embed/event/evt-qcaL1sDb6Cg68Am/simple"
                        width="600"
                        height="450"
                        frameBorder="0"
                        style={{ border: '1px solid #bfcbda88', borderRadius: '4px' }}
                        allow="fullscreen; payment"
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                </div>
            </div>
        );
    }
}

export default LumaPopup;
