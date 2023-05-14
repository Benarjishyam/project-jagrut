import React, { useState } from "react";
import axios from 'axios';

import WheelComponent from "react-wheel-of-prizes";
import { Alert} from 'reactstrap';
import '../App.css';



const Spinner = (props) => {
 
  const [played, Setplayed] = useState(false);

  const segments = [
    'better luck vS',
    '500 ₹',
    '1500 ₹',
    'better luck vS',
    '3000 ₹',
    '2000 ₹',
    'better luck vS',
    '1000 ₹'
  ]
  const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000'
  ]
  const onFinished = async(winner) => {
    console.log(winner);
    Setplayed(true);
    console.log(played);
    alert("Hurray You won 1500/- Myntra EVoucher. Details will be shared soonly to \"jagruthinaidu01@gmail.com\"");
    alert("Thanks for Your time here. Once again Happy Birthday Jagruthi");
    alert("You may close this window now!!!.  See you soon in next Challenges Bye!!...")
    const res = await axios.get('https://demo-agpr.onrender.com/mail')
    console.log(res.data.success);
    
  }

  const myStyle = {
    textAlign: 'center',
    fonFamily: 'sans-serif',
    fontSize: '26px',
    textAlign: 'left',
    width: '100%',
    paddingTop: '70px',
    float: 'center'
  }
  return (
    <React.Fragment>
     <Alert><h1>You are only allowed to Spin once. Each block has fair chances of selection</h1></Alert>
    <div className="App">
    
    <div>
      <WheelComponent
      style ={myStyle}
        segments={segments}
        segColors={segColors}
        winningSegment='1500 ₹'
        onFinished={(winner) => onFinished(winner)}
        primaryColor='black'
        contrastColor='white'
        buttonText='Spin'
        isOnlyOnce={true}
        size={220}
        upDuration={100}
        downDuration={1000}
        fontFamily='Arial'
      />
    </div>
    </div>
     </React.Fragment>
  )
}


export default Spinner;