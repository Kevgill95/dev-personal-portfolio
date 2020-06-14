import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Container from 'react-bootstrap/Container';

function About(props) {

    return (
        <Container md={8} sm={12} className="justify-content-center">
          <Hero title={props.title} className="kev-card-image-about" src={require('../assets/images/Kevin_Lily.jpg')} />

          <img className="kev-card-image-about" src={require('../assets/images/Kevin_Lily.jpg')} />

          <Content className="d-flex justify-content-center">
            <p>Hello, my name is Kevin Gillooly, and I am a software developer with experience in React, Ruby on Rails, React Typescript, PostgreSQL, C#, HTML, and CSS.</p>
          
            <p>I am currently learning new things, with gaining more experience in SQL, Material UI, Node JS, and backend development.</p>
          
            <p>When I'm not developing, I like hanging out with friends, meeting new people, playing basketball and golf, an traveling too. I also like to take pictures to capture my experiences.</p>
          </Content>
          
        </Container>
    );

}



export default About;