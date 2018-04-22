import React from 'react';
import PropTypes from 'prop-types';
import ContentHeader from './ContentHeader';
// ****************** BOOTSTRAP ******************************
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
// ****************** FONT AWESOME ****************************
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFacebookSquare from '@fortawesome/fontawesome-free-brands/faFacebookSquare';
import faGithubSquare from '@fortawesome/fontawesome-free-brands/faGithubSquare';
import faTwitterSquare from '@fortawesome/fontawesome-free-brands/faTwitterSquare';

const Footer = () => {
    return (
        <div id="footer" className="container-fluid content-section">
            <ContentHeader headerText="Contact me!" smallText="" />
            <Row>
                <Col mdOffset={1} md={6}>
                    <div className="contact-info">
                        <h3><b>Tyler Roesler</b></h3>
                        <p>(727) 560-2857</p>
                        <p>Troesler95@gmail.com</p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="social-icons">
                        <Row className="vertical-center">
                            <Col md={4}>
                                <a href="https://github.com/Troesler95" target="_blank" rel="external">
                                    <FontAwesomeIcon icon={faGithubSquare} size="7x" />
                                </a>
                            </Col>
                            <Col md={4}>
                                <a href="https://twitter.com/troesler95" target="_blank" rel="external">
                                    <FontAwesomeIcon icon={faTwitterSquare} size="7x" />
                                </a>
                            </Col>
                            <Col md={4}>
                                <a href="https://www.facebook.com/troesler95" target="_blank" rel="external">
                                    <FontAwesomeIcon icon={faFacebookSquare} size="7x" />
                                </a>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;