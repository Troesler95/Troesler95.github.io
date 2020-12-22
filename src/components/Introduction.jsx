import React from 'react';
import SvgTerminalIcon from './SvgTerminalIcon';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Introduction = () => (
    <Row className={"d-flex align-items-center justify-content-center flex-md-row"}>
        <Col md={4}>
            <div id="terminal-icon" className="text-center mx-auto">
                <SvgTerminalIcon></SvgTerminalIcon>
            </div>
        </Col>
        <Col xs={{span: 10, offset: 1}} md={{span: 6, offset: 0}}>
            <div id="intro" className="d-flex flex-column">
                <h1><b>Hi there! I'm</b></h1>
                <h1><b>Tyler Roesler.</b></h1>
                <small>software engineer | tech enthusiast | coffee lover</small>
            </div>
        </Col>
    </Row>
);

export default Introduction;