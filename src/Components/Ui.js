// import {Navbar,Container,Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { FaBeer } from "react-icons/fa";
import { BsFillAlarmFill } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import "./Card.css";
import Card from "./Card";
import {
  FaMapMarkerAlt,
  FaTelegramPlane,
  FaPhoneAlt,
  FaUserAlt,
} from "react-icons/fa";
import About from "../Pages/About";

function Ui() {
  return (

    

    
    <div>
      {/* <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="text-center">
            <FaUserAlt className="d-inline-block align-top" style={30} />
            &nbsp;&nbsp; User Infromations
          </Navbar.Brand>
        </Container>
      </Navbar> */}



      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink className='navclass' to="/">Pages</NavLink>
          <Nav className="ml-auto">
            <NavLink className='navclass' to="/">Home</NavLink>
            <NavLink className='navclass' to="/about">About Us</NavLink>
            <NavLink className='navclass' to="/contact">Contact Us</NavLink>
          </Nav>
        </Container>
      </Navbar>


    



    </div>
    
  );
}

export default Ui;
