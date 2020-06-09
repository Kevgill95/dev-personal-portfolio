import React from 'react';

import github from '../assets/images/github.png';
import LinkedIn from '../assets/images/LinkedIn-logo.png';
import KevinGillooly from '../assets/images/KevinGillooly.jpg';

import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
              {
                id: 0,
                title: 'Kevin Gillooly',
                subTitle: 'Rate, review, different Podcasts',
                imgSrc: KevinGillooly,
                link: 'https://podcastr-app.herokuapp.com/',
                selected: false
              },
              {
                id: 1,
                title: 'LinkedIn',
                subTitle: 'Connect with me on LinkedIn!',
                imgSrc: LinkedIn,
                link: 'https://www.linkedin.com/in/kevingillooly/',
                selected: false
              },
              {
                id: 2,
                title: 'Github Profile',
                subTitle: 'My GitHub',
                imgSrc: github,
                link: 'https://github.com/kevgill95',
                selected: false
              },
            ]
        }
    }

    handleClick = (id, card) => {

      let items = [...this.state.items];
      
      items[id].selected = items[id].selected ? false : true;

      items.forEach(item => {
          if(item.id !== id) {
            item.selected = false;
          }
      });

      this.setState({ items });
    }

    createItems = (items) => {
      return items.map(item => {
        return <Card 
        item={item} 
        click={e => this.handleClick(item.id, e)} 
        key={item.id} 
        />
      })
    }

    render() {
      return(
          <Container fluid={true}>
            <div className="justify-content-around text-center">
              {this.createItems(this.state.items)}
            </div>
          </Container>
      );
    }

}


export default Carousel;