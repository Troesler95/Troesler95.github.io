import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';

const SectionTitle = (props) => (
    <Col xs={{span: 10, offset: 1}} className="section-title">
        <h2 style={{color: props.color}}><b>{props.children}</b></h2>
    </Col>
);

SectionTitle.propTypes = {
    color: PropTypes.string
};

export default SectionTitle;