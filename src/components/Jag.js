import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import React from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import { Row, Col,Container, Card, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../App.css';
import Login from './Login';


const img1 = require('../images/jagruthi.jpg');
const img2 = require('../images/jag.jpg');
const bgImage = require('../images/a.jpg');

const Home = (props)=> {

  const { width, height } = useWindowSize() ; // For Confetti
  const { isAuth } = props.isAuth;

  const myStyle = {
    paddingTop: '12px',
    color: 'white',
    
    fontStyle: 'italic',
    float:'right',
    
    justifyContent : 'center',
    alignContent: 'center',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontSize: '24px',
    textAlign: 'left'
    
  };

  return (
    isAuth ? (
    <React.Fragment>
      
      <Container className='App'>
        <Carousel >
          <Carousel.Item interval={2000} > 
            <img className="d-block w-100"
              src={img1}
              class="rounded mx-auto d-block img-fluid"
              alt=""
            />
            <Carousel.Caption>
              <h3></h3>
              <p>Wish You a Many more Happy Returns of the Day ☺</p>
            </Carousel.Caption>
          </Carousel.Item> 

          <Carousel.Item  interval={2500}>
            <img className="d-block w-100"
              src={img2}
              class="rounded mx-auto d-block img-fluid"
              alt="Second slide"
            />
            <Carousel.Caption>
              <p>Happy Happiest Birthday Jagruthi ☺</p>
              <p>By BEN</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
   
      <Confetti
          width={width}
          height={height}
        />
        <Container > <Link to="/spinner"><h3 style={myStyle} >Claim your Surprise GIFT!!!   -BEN</h3></Link></Container>
        
      </React.Fragment>
       )
       :
       (<Login />)
  );
}

export default Home;
