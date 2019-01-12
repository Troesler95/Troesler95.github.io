import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-bootstrap/lib/Modal';
import Image from 'react-bootstrap/lib/Image';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';

export default class ProjectModal extends React.Component {
    constructor(props,context) {
        super(props, context);

        this.state = {
            isOpen: true
        };

        this.closeModal = this.closeModal.bind(this);
        this.showModal = this.showModal.bind(this);
    }
    showModal() {
        this.setState({isOpen: true});
    }
    closeModal() {
        this.setState({isOpen: false});
        this.props.closeParent();
    }
    render() {
        const projIms = require.context("../media/projectThumbnails", false, /\.jpe?g$/);
        var filename = this.props.projObj["full-filename"];

        return (
            <Modal show={this.state.isOpen} onHide={this.closeModal} dialogClassName="size-modal">
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.projObj["name"]}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col xs={8} xsOffset={2}>
                            <Image src={(filename === "") ? filename : projIms(`./${filename}`, true)}
                                alt="Project Screenshot" responsive rounded />
                        </Col>
                    </Row>
                    <br className="modal-spacer" />
                    <Row>
                        <Col xs={10} xsOffset={1}>
                            <h4><b>Description</b></h4>
                            <p>{this.props.projObj["description"]}</p>
                            <br />
                            <h4><b>Skills Used</b></h4>
                            <ul>
                                {this.props.projObj["skills"].map((skill, i) => <li key={i}>{skill}</li>)}
                            </ul>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    {/* TODO: Insert github icon w/ dynamic links*/}
                    <Button onClick={this.closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

Modal.propTypes = {
    projObj: PropTypes.object.isRequired
};