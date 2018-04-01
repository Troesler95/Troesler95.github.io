import React from 'react';
import ContentSection from './ContentSection';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';

const AboutMe = () => (
    <ContentSection id="about-me">
        {/*For positioning text and space*/}
        <Row>
            <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
                <p className="h1">
                    <b>I'm a support engineer for Microsoft in Irving, TX with
                        a unique passion for learning and exploring.</b>
                </p>
            </Col>

            <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
                <p className="h1">
                    I recently finished my Bachelors in Computer Science at the
                    State University of New York at Fredonia. It was there that I discovered
                    my love for the field! I received a breadth of coursework ranging from
                    web programming to machine learning and artificial intelligence. My career goals
                    are oriented around developing cutting-edge products that change and empower people's lives.
                </p>
            </Col>

            <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
                <p className="h1">
                    I thoroughly enjoy the process of learning and growing both as a developer and person;
                    and I love sharing those experiences too! Be sure to check out{' '}
                    <OverlayTrigger overlay={<Tooltip>Coming soon!</Tooltip>} placement="bottom"><a>my blog</a></OverlayTrigger>{' '}
                    to keep up with my latest antics.
                </p>
            </Col>
        </Row>
    </ContentSection>
);

export default AboutMe;