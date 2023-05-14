
import React, { useState, createContext } from 'react';
import '../App.css';
import axios from 'axios';
import '../App.css';
import { Row, Col,Container, Card, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import Home from './Home'

import {  
  BrowserRouter ,  /* as Route */
  Routes,  
  Route, 
  Switch, 
  Link ,
  
}   
from 'react-router-dom';


function Login(props) {
    // 3 State Variables 
    const [userName, setUserName] = useState("ben5566");
    const [password, setPassword] = useState("");   
    
    const handleSubmit = async (event)=>{
        console.log("PSK" + password);
        
        event.preventDefault();  // IF not there browser will refresh the page
        try {
            const postdata={
                "username" : userName,
                "password": password
                }
            //const res = await axios.post('https://demo-agpr.onrender.com/login', postdata)
            //console.log(res.data.success);
            if(password=="123123"){
              props.handleAuth(true)
              
             // window.location.href = '/home';// Redirect to the home page
            }
            else{
              alert("Wrong Credentials. Please try again!!!");
            }
          } catch (e) {
              alert(e);
          }
    };

    return (
        <Container className="App">
          <Row> </Row>
          <Row>
            <Col md>
              <Card>
                <CardBody>
                  <h2 className="text-center mb-5">Hi Jagruthi, Welcome </h2>
                  <Form onSubmit={handleSubmit}>
                    
                    <FormGroup>
                      <Label for="password" ><h3>Access Code</h3></Label>
                      <Input type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Enter your access code " 
                            onBlur={e=>setPassword(e.target.value)}/>
                    </FormGroup>
                    <Button color="primary" block value="Submit">Get In</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
  );
}
export default Login;
