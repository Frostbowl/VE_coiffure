import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../assets/style/sendModal.css';

const SendModal = ({ show, message, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} className="send-modal">
            <Modal.Header closeButton>
                <Modal.Title>Succès !</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fermer
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SendModal;