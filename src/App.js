import React, { Component } from 'react';
import './App.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';
import Header from './Components/Header';
import Body from './Components/Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;
