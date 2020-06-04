import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Kevin Gillooly',
      headerLink: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Welcome to my website',
        subTitle: 'Learn more about me',
        label: 'my other project is listed below'
      },
      about: {
        title: 'My bio'
      },
      contact: {
        title: 'Connect with me!'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Kevin Gillooly</Navbar.Brand>
            
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path='/' exact render={() => <HomePage 
          title={this.state.home.title}
          subTitle={this.state.home.subTitle}
          label={this.state.home.label}
          />} />

          <Route path='/about' exact render={() => <About 
          title={this.state.about.title}
          />} />

          <Route path='/contact' exact render={() => <Contact 
          title={this.state.contact.title}
          />} />

        
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
