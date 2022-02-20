import React from 'react';
import {Form, Button} from 'react-bootstrap';
import styles from './styles.css'
import history from '../history';
import { Link } from "react-router-dom";
import Routes from '../Routes';

const LeftSide = () => {
 return (
     <div>
         <br/>
         <br/>
         <br/>
         <Form style={{width:"80%", marginLeft:"10%", marginTop:"20%"}}>
             <Form.Group >
                 {/* <Form.Label>Enter your email</Form.Label>
                 <Form.Control type="email" placeholder="Enter your email" /> */}
                 {/* <Link to="/TeacherLogin"> */}
                 <Button className="signin-btn" type="submit" onClick={() => history.push('/TeacherLogin')}>SignIn As Teacher</Button>
                 {/* </Link> */}
             </Form.Group><br/><br/>
             <Form.Group >
                 {/* <Form.Label>Enter your password</Form.Label>
                 <Form.Control type="password" placeholder="Enter your password" /> */}
                 <Button className="signin-btn" type="submit" onClick={() => history.push('/StudentLogin')}>SignIn As Student</Button>
             </Form.Group>
             <br/><br/>
             <hr></hr>
             <h5>Or Sign-In Using</h5>
             <div className="center">
                <img width="60px" className="gf" src="https://cdn.icon-icons.com/icons2/836/PNG/512/Google_icon-icons.com_66793.png"/>
                <img width="60px" className="gf" src="https://www.freeiconspng.com/uploads/facebook-logo-3.png"/>
             </div>
             
         </Form>
     </div>
 )
}

export default LeftSide;