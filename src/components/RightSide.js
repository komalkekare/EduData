import React from 'react';
import {Image} from "react-bootstrap";
import logo from '../logo.jpeg'
import mainimg from '../Main-img.PNG'

const RightSide = () => {
    return (
        <div>
            <Image className="logo" src={logo}/>
            <h4>One Platform for all your <span className="sp">Achievements !</span></h4>
            <Image src={mainimg} thumbnail style={{border:"none", marginTop:"15%", width:"80%"}} /> 
        </div>
    )
}

export default RightSide;