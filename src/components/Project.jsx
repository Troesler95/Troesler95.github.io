import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, Image, Button, Modal } from 'react-bootstrap';

export default class Project extends React.Component {
    constructor(props) {
        super(props);

        this.openProjectModal = this.openProjectModal.bind(this);
    }

    openProjectModal() {
        this.props.onOpenModal(this.props.projectObj);
    }

    render() {
        let {projectObj} = this.props;
        const logosDir = require.context("../media/project_thumbnails", false, /\.(jpe?g|png|svg)?/);
        const LogoSvg = logosDir(`./${projectObj["thumbnail-filename"]}`).default;

        return <a onClick={this.openProjectModal}>
            <Card className={"text-center project-card mb-4"}>
                <Card.Img variant="top" src={LogoSvg} className={"logo proj-logo"} />
                <Card.Body>
                    <Card.Title className={"align-middle"}>{projectObj["name"]}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" onClick={this.openProjectModal}>LEARN MORE</Button>
                </Card.Footer>
            </Card>
        </a>
    }
}

Project.propTypes = {
    projectObj: PropTypes.object.isRequired,
    onClick: PropTypes.func
};


