import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Spring } from 'react-spring/renderprops';
import '../App.css';

function Hero(props) {

        return(
            <Jumbotron  className="d-flex text-center bg-transparent jumbotron-fluid p-0">
                <Container fluid={true} className="justify-content-center py-5 textFadeInDown">
                    { props.title && <h1 className="display-1 font-weight-bolder textFadeInDown">{props.title}</h1> }
                    { props.subTitle && <h3 className="display-4 font-weight-light textFadeInDown">{props.subTitle}</h3> }
                    { props.label && <h3 className="lead font-weight-light">{props.label}</h3> }
                </Container>
            </Jumbotron>
    );
}


export default Hero;