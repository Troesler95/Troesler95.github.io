import React from 'react';
import SectionTitle from './SectionTitle';
import { Row, Col } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Connect = () => (
    <Row id={"connect"}>
        <SectionTitle>INTERESTED IN CONNECTING?</SectionTitle>
        <Row className="icons-cont">
            <Col xs={3}>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Troesler95">
                    <FontAwesomeIcon className="mobile-social-icon" icon={["fab", "github"]} size="4x" color="black"/>
                    <FontAwesomeIcon className="desktop-social-icon" icon={["fab", "github"]} size="6x" color="black"/>
                </a>
            </Col>
            <Col xs={3}>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tylerroesler/">
                    <FontAwesomeIcon className="mobile-social-icon" icon={["fab", "linkedin"]} size="4x" color="#2867B2"/>
                    <FontAwesomeIcon className="desktop-social-icon" icon={["fab", "linkedin"]} size="6x" color="#2867B2"/>
                </a>
            </Col>
            <Col xs={3}>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/troesler95">
                    <FontAwesomeIcon className="mobile-social-icon" icon={["fab", "twitter"]} size="4x" color="#1DA1F2"/>
                    <FontAwesomeIcon className="desktop-social-icon" icon={["fab", "twitter"]} size="6x" color="#1DA1F2"/>
                </a>
            </Col>
            <Col xs={3}>
                <a href="mailto:troesler95@gmail.com?subject=I'm%20interested%20in%20connecting!">
                    <FontAwesomeIcon className="mobile-social-icon" icon={"envelope"} size="4x"/>
                    <FontAwesomeIcon className="desktop-social-icon" icon={"envelope"} size="6x"/>
                </a>
            </Col>
        </Row>
    </Row>
);

export default Connect;