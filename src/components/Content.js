import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../src/About.css';
import '../App.css';

function Content(props) {

    return(
              <Col className="text textFadeInDown">
                {props.children}
              </Col>
    );
}

export default Content;