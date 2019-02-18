import React, { Component } from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button
} from 'reactstrap';
import {
    OverlayTrigger, Popover
} from 'react-bootstrap';
import "./Header.css";
import logo from "./sp2.png";
import Body from './Body';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            buscar: ""
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
    }
    handleInputChange = (event) => {
        event.preventDefault()
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    prueba(p){
        alert("HEY: " + p)
    }
    render() {
        const { buscar } = this.state
        //const { carrito } = this.props.carro
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Navbar className="Navbar" expand="md">
                        <OverlayTrigger trigger="click" placement="bottom" overlay={
                            <Popover id="popover-basic" title="Carrito de Compras">
                                <p>Hey: {this.props.carrito}</p>
                            </Popover>
                        }>
                            <Button outline color="secondary" variant="success">
                                <img style={{ width: "30%", height: "30%" }} src={"https://png.pngtree.com/svg/20170224/shopping_cart_white_hint__252857.png"} alt="logo2" />
                            </Button>
                        </OverlayTrigger>
                        <NavbarBrand href="/">
                            <img style={{ width: "70%", height: "auto" }} src={logo} className="App-logo" alt="logo" />
                        </NavbarBrand>
                        <img style={{ width: "5%", height: "5%" }} src={"https://png.pngtree.com/svg/20170313/search_white__122520.png"} alt="logo2" />
                        <p>  H</p>
                        <input type="text" placeholder="Buscar.." name="buscar" onChange={this.handleInputChange}></input>
                        <p> HEY</p>
                        <NavbarToggler className="Collapse" onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} light navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink className="Navlink" href="https://sportline.com.hn/blog">BLOG</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="Navlink" href="https://sportline.com.hn/buscador-sucursales">SUCURSALES</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="Navlink" href="https://sportline.com.hn/eventos">EVENTOS</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    <Body search={buscar} />
                </form>
            </div >
        );
    }
}

export default Header;