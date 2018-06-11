import React from 'react';
import Link from 'gatsby-link';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

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
  display: "block",
  width: "100vw",
  maxHeight: "15%",
  backgroundColor: "black",
  color: "white"
};

const BlogHeader = ({}) => (
  <div style={blogHeaderStyles}>
    <Row>
      <Col md={4} mdOffset={1}>
        <h1>Tyler Roesler</h1>
      </Col>
    </Row>
  </div>
);

export default { Header, BlogHeader }
