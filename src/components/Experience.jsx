import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, Image, Button, Modal } from 'react-bootstrap';

export default class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.openExperienceModal = this.openExperienceModal.bind(this);
    }

    openExperienceModal() {
        this.props.onOpenModal(this.props.experienceObj);
    }

    render() {
        let {experienceObj} = this.props;
        const logosDir = require.context("../media/company_logos", false, /\.svg?/);
        const LogoSvg = logosDir(`./${experienceObj["icon_name"]}`).default
        
        return <a onClick={this.openExperienceModal}>
            <Card className={"text-center experience-card mb-4"}>
                <Card.Img variant="top" src={LogoSvg} className={"logo"} />
                <Card.Body>
                    <Card.Title className={"align-middle"}>{experienceObj["job_title"]}</Card.Title>
                    <Card.Text>{experienceObj["date_string"].toUpperCase()}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" onClick={this.openExperienceModal}>LEARN MORE</Button>
                </Card.Footer>
            </Card>
        </a>
    }
}

Experience.propTypes = {
    experienceObj: PropTypes.object.isRequired,
    onClick: PropTypes.func
};

