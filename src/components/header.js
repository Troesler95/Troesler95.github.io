import React from 'react';
import Link from 'gatsby-link';

import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

const blogHeaderStyles = {
  position: 'fixed',
  display: "block",
  width: "100vw",
  maxHeight: "10%",
  minHeight: "75px",
  backgroundColor: "black",
  color: "white"
};

const iconCont = {
  textAlign: 'center',
  marginTop: '20px'
};

const iconLinkStyles = {
  textDecoration: 'none',
  color: 'white',
}

const BlogHeader = ({}) => (
  <Row>
    <div style={blogHeaderStyles}>
      <Col md={4} mdOffset={2}>
        <h1>Tyler Roesler</h1>
      </Col>
      <Col md={4}>
        <Row>
          <Col md={2} mdOffset={8} style={iconCont} >
            <OverlayTrigger overlay={<Tooltip>Blog Home</Tooltip>} placement={"bottom"}>
              <Link to="/" style={iconLinkStyles}>
                <FontAwesomeIcon icon={faHome} size="3x" />
              </Link>
            </OverlayTrigger>
          </Col>
          <Col md={2} style={iconCont} >
            <OverlayTrigger overlay={<Tooltip>My Web Portfolio</Tooltip>} placement={"bottom"}>
              <Link to="/" style={iconLinkStyles}>
                <FontAwesomeIcon icon={faUser} size="3x" />
              </Link>
            </OverlayTrigger>
          </Col>
        </Row>
      </Col>
    </div>
    <div styles={{display: 'block', minHeight: '75px', maxHeight: '10%', height: '75px', width: '100vw'}}>#</div>
  </Row>
);

export default { Header, BlogHeader }
