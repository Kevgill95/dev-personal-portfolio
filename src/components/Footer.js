import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Footer.css';

function Footer() {

  return (
    <footer className="mt-5">
      <div className="foot border-top justify-content-between p-3">
        <div className="pull-left">Kevin Gillooly</div>
        <div className="copyright pull-right">Copyright © 2020 - Kevin Gillooly</div>
      </div>
    </footer>
    );

}

export default Footer;