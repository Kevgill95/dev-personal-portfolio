import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../src/About.css';

function Content(props) {

    return(
            // <Row className="justify-content-center">
              <Col>
                {props.children}
              </Col>
            // </Row>
    );
}

export default Content;