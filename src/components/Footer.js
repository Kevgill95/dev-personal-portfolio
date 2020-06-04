import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Footer.css';

function Footer() {

  return (
    <footer className="mt-5">
      <div className="border-top justify-content-between p-3">
          <div className="col-md-6 col-sm-12 float-left text-left">
            <span>Kevin Gillooly</span>
          </div>
          <div className="col-md-6"></div>
          <div className="col-md-3 col-sm-12 float-right text-right">
            <span>Site made by Kevin Gillooly</span>
          </div>
      </div>
    </footer>
    );

}

export default Footer;