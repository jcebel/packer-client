import React from 'react';
import {Button, Modal} from 'react-bootstrap'

export class ConfirmPopup extends React.Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="sm-8"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Delete Confirmation
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Are you sure you want to delete this delivery request?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide} variant="secondary">Cancel</Button>
                    <Button variant="primary" onClick={this.props.onSubmit}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
