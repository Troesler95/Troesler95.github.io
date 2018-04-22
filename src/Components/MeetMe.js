import React from 'react';
import ContentSection from "./ContentSection";
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const MeetMe = () => (
    <ContentSection id="meet-me">
        <Row>
            <Col xs={12}>
                <h1>
                    <Row><Col xs={12} smHidden={true} mdHidden={true} lgHidden={true}>Hello, I'm </Col></Row>
                    <Col xsHidden={true}>Hello, I'm </Col>
                    Tyler Roesler
                </h1>
                <small>software developer | technology enthusiast | coffee lover</small>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <button className="ghost-btn" id="lrnBtn">learn more</button>
            </Col>
        </Row>
    </ContentSection>
);

export default MeetMe;