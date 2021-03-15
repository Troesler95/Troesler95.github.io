import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, Image, Button, Modal } from 'react-bootstrap';

export default class SiteModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: true
        };

        this.handleClose = this.handleClose.bind(this);
        this.openProjectModal = this.openProjectModal.bind(this);
    }

    handleClose() {
        this.setState({
            modalOpen: false,
        });
        this.props.onClose();
    }

    openProjectModal() {
        this.setState({
            modalOpen: true
        });
    }

    render() {
        return <Modal show={this.state.modalOpen} onHide={this.handleClose} size="lg">
                <Modal.Header closeButton/>
                <Modal.Body>
                    {this.props.children}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleClose}>CLOSE</Button>
                </Modal.Footer>
            </Modal>
    }
}

SiteModal.propTypes = {
    onClose: PropTypes.func,
    size: PropTypes.string
}