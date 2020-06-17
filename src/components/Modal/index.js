import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import _ from 'lodash';

const defaultStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        padding: '20px 20px 0px',
        borderRadius: '20px',
        border: '1px solid gray',
        backgroundColor: 'white',
    },
};

const Modal = ({ isOpen, onAfterOpen, onAfterClose, onRequestClose, children, customStyles }) => {
    const style = customStyles ? _.merge({}, defaultStyles, customStyles) : defaultStyles;
    return (
        <ReactModal style={style} isOpen={isOpen} onAfterOpen={onAfterOpen} onAfterClose={onAfterClose} onRequestClose={onRequestClose}>
            {children}
        </ReactModal>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onAfterOpen: PropTypes.func,
    onAfterClose: PropTypes.func,
    onRequestClose: PropTypes.func,
    children: PropTypes.object.isRequired,
    customStyles: PropTypes.object,
};

Modal.defaultProps = {
    customStyles: defaultStyles,
};

export default Modal;
