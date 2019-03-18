import React, { Component } from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button
} from 'reactstrap';
import {
    OverlayTrigger, Popover, Table
} from 'react-bootstrap';
import "./Header.css";
import logo from "./sp2.png";
import Body from './Body';
import tienda from '../tienda';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

var config = {
    apiKey: "AIzaSyAIhWJOK5UlUr2yZ3V5XVpcWQroWAA60kU",
    authDomain: "catalogodb-a019f.firebaseapp.com",
    databaseURL: "https://catalogodb-a019f.firebaseio.com",
    projectId: "catalogodb-a019f",
    storageBucket: "catalogodb-a019f.appspot.com",
    messagingSenderId: "27899252808"
};
firebase.initializeApp(config);

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            buscar: "",
            cart: [],
            isSignedIn: false
        };
        this.eliminar = this.eliminar.bind(this);
        tienda.subscribe(() => {
            this.setState({
                cart: tienda.getState().cart
            });
        });
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
    eliminar(producto) {
        tienda.dispatch({
            type: "REMOVE_FROM_CART",
            producto: producto
        })
    }
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
            console.log("user", user)
        })
    }
    render() {
        const { buscar } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Navbar className="Navbar" expand="md">
                        <OverlayTrigger trigger="click" placement="bottom" overlay={
                            <Popover id="popover-basic" title="Carrito de Compras">
                                <Table fill>
                                    <tbody>
                                        {this.state.cart.map(producto =>
                                            <tr>
                                                <td>{producto.nombre}</td>
                                                <td className="text-right">L.{producto.precio}</td>
                                                <td className="text-right">
                                                    <Button color="danger" onClick={() => this.eliminar(producto)}>X</Button>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan="4">
                                                <strong>
                                                    Total: L. {this.state.cart.reduce((sum, product) => sum + product.precio, 0)}
                                                </strong>
                                            </td>
                                        </tr>

                                    </tfoot>
                                </Table>
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
                                    {this.state.isSignedIn ? (
                                        <Button className="button" onClick={() => firebase.auth().signOut()}>SIGN OUT</Button>
                                    ) : (
                                            <Button className="button" onClick={""}>SIGN IN</Button>
                                        )}
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