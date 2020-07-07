import React from 'react';
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