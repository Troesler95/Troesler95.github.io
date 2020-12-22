import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, Image, Button, Modal } from 'react-bootstrap';

export default class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false,
        };

        this.ExperienceObj = null;

        this.handleClose = this.handleClose.bind(this);
        this.openExperienceModal = this.openExperienceModal.bind(this);
    }

    handleClose() {
        this.setState({
            modalOpen: false,
        });
    }

    openExperienceModal() {
        this.setState({
            modalOpen: true
        });
    }

    createModalFromExperience() {
        let {experienceObj} = this.props;

        return <Modal show={this.state.modalOpen} onHide={this.handleClose}>
                <Modal.Header closeButton/>
                <Modal.Body>
                    <ExperienceDisplay experienceObj={experienceObj}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleClose}>CLOSE</Button>
                </Modal.Footer>
            </Modal>
    }

    render() {
        let {experienceObj} = this.props;
        const logosDir = require.context("../media/company_logos", false, /\.svg?/);
        const LogoSvg = logosDir(`./${experienceObj["icon_name"]}`).default
        
        return <>
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
            {/* TODO: Lift state up to here, and display modal outside of column */}
            {(this.state.modalOpen) ? this.createModalFromExperience() : null}
        </>
    }
}

Experience.propTypes = {
    experienceObj: PropTypes.object.isRequired,
    onClick: PropTypes.func
};

function ExperienceDisplay(props) {
    let { experienceObj } = props;
    const logosDir = require.context("../media/company_logos", false, /\.svg?/);
    const LogoSvg = logosDir(`./${experienceObj["icon_name"]}`).default
    return <>
        <Row>
            <Col xs={{span: 10, offset: 1}}>
                <Image src={LogoSvg} fluid />
            </Col>
        </Row>
        <Row>
            <Col xs={{span: 10, offset: 1}}>
                <h2 className={"modal-job-title"}>{experienceObj["job_title"]}</h2>
            </Col>
        </Row>
        <Row>
            <Col xs={{span: 10, offset: 1}}>
                <h4 className={"modal-job-date"}>{experienceObj["date_string"].toUpperCase()}</h4>
            </Col>
        </Row>
        <Row>
            <Col xs={{span: 10, offset: 1}}>
                {experienceObj["description"].split("\n").map((str, i) => <p key={i} className={"modal-job-description"}>{str}</p>)}
            </Col>
        </Row>
        <Row><Col xs={{span: 10, offset: 1}}><h4 className={"modal-title-key-skills"}>Key Skills</h4></Col></Row>
        <Row>
            <Col xs={{span: 10, offset: 1}}>
                <ul>
                    {experienceObj["key_skills"].map((skill, i) => <li key={i} className={"modal-skill-item"}>{skill}</li>)}
                </ul>
            </Col>
        </Row>
    </>;
}
