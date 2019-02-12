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
        {/*
        <header className="App-header">
          <img src={"https://www.galerias.com.ni/wp-content/uploads/2017/12/sportline-01.png"} className="App-logo" alt="logo" />
        </header>
        <Button onClick={<Header />} outline color="primary">Comenzar</Button>
        */}
        <Header/>
        
        <Body/>
      </div>
    );
  }
}

export default App;
