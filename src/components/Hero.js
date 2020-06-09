import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Hero(props) {

        return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true} className="justify-content-center py-5">
                <Row>
                    <Col className="d-flex justify-content-center">
                        { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1> }
                        { props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3> }
                        { props.label && <h3 className="lead font-weight-light">{props.label}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}


export default Hero;