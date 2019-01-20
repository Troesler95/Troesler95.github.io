import React from 'react';
import ContentSection from "./ContentSection";
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Alert from 'react-bootstrap/lib/Alert';

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
            {/* <Col xs={12}> */}
            <Col xsHidden={true} smHidden={false}>
                {/*TODO: add the scrollTo function here instead of at runtime */}
                <button className="ghost-btn" id="lrnBtn">learn more</button>
            </Col>
            <Col xs={12} mdHidden={true} lgHidden={true} smHidden={true}>
                {/* <h3 className={"construction-notice"}>
                    Sorr but my mobile site is still under construction. <br />
                    Be sure to visit next time you're on your computer though!
                </h3> */}
                <Alert bsStyle="warning">
                    Sorry but my mobile site is still under construction. <br />
                    Be sure to visit next time you're on your computer though!
                </Alert>
            </Col>
        </Row>
    </ContentSection>
);

export default MeetMe;