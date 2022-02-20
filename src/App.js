import React from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Button, Alert, Row, Col} from 'react-bootstrap';
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      {/* <Menu /> */}
      <Router>
        <Row className="landing">
          <Col ><RightSide /></Col>
          <Col ><LeftSide /></Col>
        </Row>
    </Router>,
     
    </div>
  );
}

export default App;