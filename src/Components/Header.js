import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import "./Header.css";
import logo from "./sp2.png";

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar className="Navbar" expand="md">
                    <NavbarBrand href="/">
                        <img style={{ width: "50%", height: "auto" }} src={logo} className="App-logo" alt="logo" />
                    </NavbarBrand>
                    <img style={{ width: "5%", height: "5%" }} src={"https://png.pngtree.com/svg/20170313/search_white__122520.png"} alt="logo2" />
                    <p>  H</p>
                    <input type="text" placeholder="Search.."></input>
                    <p> HEY</p>
                    <NavbarToggler className="Collapse" onClick={this.toggle}/>
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
            </div>
        );
    }
}

export default Header;