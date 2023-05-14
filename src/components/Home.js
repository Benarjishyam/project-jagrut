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

  const handleEvent = () =>{
    console.log(" I Called this")
    props.handleSpinProp(false);
    //window.location.href = '/spinner';// Redirect to the Spinnig page
  }

  return (
    
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
              <p>“I wish for all of your wishes to come true. Happy birthday! ☺ "</p>
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
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
   
      <Confetti
          width={width}
          height={height}
        />
        <Container >  <Button color="info"  onClick={handleEvent} ><h4> Claim your Surprise GIFT!!! Jagruthi </h4></Button> </Container>
        
      </React.Fragment>
       
  );
}

export default Home;
