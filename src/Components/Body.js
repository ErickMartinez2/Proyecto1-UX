import React, { Component } from 'react';
import {
    Card, CardImg, CardBody, CardHeader, CardFooter, Button
} from 'reactstrap';
import {
    OverlayTrigger, Popover
} from 'react-bootstrap';
import logo from "./img1.jpeg";
import logo2 from "./img2.jpeg";
import logo3 from "./img3.jpeg";
import tienda from '../tienda';
import axios from "axios";

const popover = (
    <Popover id="popover-basic" title="Ubicación en la Tienda">
        <img style={{ width: "100%", height: "auto" }} src="https://www.diez.hn/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=9l1tj7dBnGSG$AWw041Als$daE2N3K4ZzOUsqbU5sYuZlneyn70_9g0zlcE5xAIaWCsjLu883Ygn4B49Lvm9bPe2QeMKQdVeZmXF$9l$4uCZ8QDXhaHEp3rvzXRJFdy0KqPHLoMevcTLo3h8xh70Y6N_U_CryOsw6FTOdKL_jpQ-&CONTENTTYPE=image/jpeg" />
    </Popover>
);

const popover2 = (
    <Popover id="popover-basic" title="Ubicación en la Tienda">
        <img style={{ width: "100%", height: "auto" }} src="https://www.cctrocadero.com/images/sport-line/005.jpg" />
    </Popover>
);

const popover3 = (
    <Popover id="popover-basic" title="Ubicación en la Tienda">
        <img style={{ width: "100%", height: "auto" }} src="https://imgur.com/412930i.jpg" />
    </Popover>
);

function ubi(pos) {
    if (pos === "1") {
        return (
            <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                <Button outline color="secondary" variant="success">VER UBICACIÓN</Button>
            </OverlayTrigger>
        );
    } else {
        if (pos === "2") {
            return (
                <OverlayTrigger trigger="click" placement="top" overlay={popover2}>
                    <Button outline color="secondary" variant="success">VER UBICACIÓN</Button>
                </OverlayTrigger>
            );
        } else {
            return (
                <OverlayTrigger trigger="click" placement="top" overlay={popover3}>
                    <Button outline color="secondary" variant="success">VER UBICACIÓN</Button>
                </OverlayTrigger>
            );
        }
    }
}

function RA(ra) {
    if (ra === "si") {
        return (
            <CardHeader>REALIDAD AUMENTADA</CardHeader>
        );
    } else {
        return (
            <CardHeader>
                <p> </p>
            </CardHeader>
        );
    }
}

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = { catalogo1: {}, catalogo2: {}, catalogo3: {} };
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
        this.añadir = this.añadir.bind(this);
        axios
            .get("https://us-central1-catalogodb-a019f.cloudfunctions.net/catalogo/catalogo1 ")
            .then(Response => {
                this.setState({ catalogo1: Response.data.Catalogo });
                console.log(this.state.catalogo1)
            });
        axios
            .get("https://us-central1-catalogodb-a019f.cloudfunctions.net/catalogo/catalogo2 ")
            .then(Response => {
                this.setState({ catalogo2: Response.data.Catalogo });
                console.log(this.state.catalogo2)
            });
        axios
            .get("https://us-central1-catalogodb-a019f.cloudfunctions.net/catalogo/catalogo3 ")
            .then(Response => {
                this.setState({ catalogo3: Response.data.Catalogo });
                console.log(this.state.catalogo3)
            });
    }

    onRadioBtnClick(rSelected) {
        this.setState({ rSelected });
    }
    añadir(producto) {
        tienda.dispatch({
            type: "ADD_TO_CART",
            producto
        })
    }
    render() {
        if (this.state.rSelected === 1) {
            if (this.props.search === "") {
                const cat1 = Object.keys(this.state.catalogo1).map(prodId => {
                    let catalogo1 = this.state.catalogo1[prodId]
                    return (
                        <div class="col-md-4">
                            <Card>
                                {RA(catalogo1.ra)}
                                <img style={{ width: "100%", height: "auto" }} src={catalogo1.imagen} />
                                <p>{catalogo1.genero}</p>
                                <strong>
                                    <p>{catalogo1.nombre}</p>
                                </strong>
                                <p>{catalogo1.marca}</p>
                                <p>L. {catalogo1.precio}</p>
                                {ubi(catalogo1.ubicacion)}
                                <CardFooter>
                                    <p>{catalogo1.info}</p>
                                </CardFooter>
                                <Button color="warning" onClick={() => this.añadir(catalogo1)}>Añadir al carrito</Button>
                            </Card>
                            <p> </p>
                        </div>
                    );
                })
                return (
                    <div class="container">
                        <strong>
                            <h1>COLECCIÓN CASUAL</h1>
                        </strong>
                        <div class="row mt-4">
                            {cat1}
                        </div>
                    </div>
                );
            } else {
                const cat1 = Object.keys(this.state.catalogo1).map(prodId => {
                let catalogo1 = this.state.catalogo1[prodId]
                    if (catalogo1.nombre.includes(this.props.search)) {
                        return (
                            <div class="col-md-4">
                                <Card>
                                    {RA(catalogo1.ra)}
                                    <img style={{ width: "100%", height: "auto" }} src={catalogo1.imagen} />
                                    <p>{catalogo1.genero}</p>
                                    <strong>
                                        <p>{catalogo1.nombre}</p>
                                    </strong>
                                    <p>{catalogo1.marca}</p>
                                    <p>L. {catalogo1.precio}</p>
                                    {ubi(catalogo1.ubicacion)}
                                    <CardFooter>
                                        <p>{catalogo1.info}</p>
                                    </CardFooter>
                                    <Button color="warning" onClick={() => this.añadir(catalogo1)}>Añadir al carrito</Button>
                                </Card>
                                <p> </p>
                            </div>
                        );
                    }
                })
                return (
                    <div class="container">
                        <strong>
                            <h1>COLECCIÓN CASUAL</h1>
                        </strong>
                        <div class="row mt-4">
                            {cat1}
                        </div>
                    </div>
                );
            }
        } else {
            if (this.state.rSelected === 2) {
                if (this.props.search === "") {
                    const cat2 = Object.keys(this.state.catalogo2).map(prodId => {
                    let catalogo2 = this.state.catalogo2[prodId]
                        return (
                            <div class="col-md-4">
                                <Card>
                                    {RA(catalogo2.ra)}
                                    <img style={{ width: "100%", height: "auto" }} src={catalogo2.imagen} />
                                    <p>{catalogo2.genero}</p>
                                    <strong>
                                        <p>{catalogo2.nombre}</p>
                                    </strong>
                                    <p>{catalogo2.marca}</p>
                                    <p>L. {catalogo2.precio}</p>
                                    {ubi(catalogo2.ubicacion)}
                                    <CardFooter>
                                        <p>{catalogo2.info}</p>
                                    </CardFooter>
                                    <Button color="warning" onClick={() => this.añadir(catalogo2)}>Añadir al carrito</Button>
                                </Card>
                                <p> </p>
                            </div>
                        );
                    })
                    return (
                        <div class="container">
                            <strong>
                                <h1>COLECCIÓN TRAINING</h1>
                            </strong>
                            <div class="row mt-4">
                                {cat2}
                            </div>
                        </div>
                    );
                } else {
                    const cat2 = Object.keys(this.state.catalogo2).map(prodId => {
                    let catalogo2 = this.state.catalogo2[prodId]
                        if (catalogo2.nombre.includes(this.props.search)) {
                            return (
                                <div class="col-md-4">
                                    <Card>
                                        {RA(catalogo2.ra)}
                                        <img style={{ width: "100%", height: "auto" }} src={catalogo2.imagen} />
                                        <p>{catalogo2.genero}</p>
                                        <strong>
                                            <p>{catalogo2.nombre}</p>
                                        </strong>
                                        <p>{catalogo2.marca}</p>
                                        <p>L. {catalogo2.precio}</p>
                                        {ubi(catalogo2.ubicacion)}
                                        <CardFooter>
                                            <p>{catalogo2.info}</p>
                                        </CardFooter>
                                        <Button color="warning" onClick={() => this.añadir(catalogo2)}>Añadir al carrito</Button>
                                    </Card>
                                    <p> </p>
                                </div>
                            );
                        }
                    })
                    return (
                        <div class="container">
                            <strong>
                                <h1>COLECCIÓN TRAINING</h1>
                            </strong>
                            <div class="row mt-4">
                                {cat2}
                            </div>
                        </div>
                    );
                }
            } else {
                if (this.state.rSelected === 3) {
                    if (this.props.search === "") {
                        const cat3 = Object.keys(this.state.catalogo3).map(prodId => {
                        let catalogo3 = this.state.catalogo3[prodId]
                            return (
                                <div class="col-md-4">
                                    <Card>
                                        {RA(catalogo3.ra)}
                                        <img style={{ width: "100%", height: "auto" }} src={catalogo3.imagen} />
                                        <p>{catalogo3.genero}</p>
                                        <strong>
                                            <p>{catalogo3.nombre}</p>
                                        </strong>
                                        <p>{catalogo3.marca}</p>
                                        <p>L. {catalogo3.precio}</p>
                                        {ubi(catalogo3.ubicacion)}
                                        <CardFooter>
                                            <p>{catalogo3.info}</p>
                                        </CardFooter>
                                        <Button color="warning" onClick={() => this.añadir(catalogo3)}>Añadir al carrito</Button>
                                    </Card>
                                    <p> </p>
                                </div>
                            );
                        })
                        return (
                            <div class="container">
                                <strong>
                                    <h1>COLECCIÓN RUNNING</h1>
                                </strong>
                                <div class="row mt-4">
                                    {cat3}
                                </div>
                            </div>
                        );
                    } else {
                        const cat3 = Object.keys(this.state.catalogo3).map(prodId => {
                        let catalogo3 = this.state.catalogo3[prodId]
                            if (catalogo3.nombre.includes(this.props.search)) {
                                return (
                                    <div class="col-md-4">
                                        <Card>
                                            {RA(catalogo3.ra)}
                                            <img style={{ width: "100%", height: "auto" }} src={catalogo3.imagen} />
                                            <p>{catalogo3.genero}</p>
                                            <strong>
                                                <p>{catalogo3.nombre}</p>
                                            </strong>
                                            <p>{catalogo3.marca}</p>
                                            <p>L. {catalogo3.precio}</p>
                                            {ubi(catalogo3.ubicacion)}
                                            <CardFooter>
                                                <p>{catalogo3.info}</p>
                                            </CardFooter>
                                            <Button color="warning" onClick={() => this.añadir(catalogo3)}>Añadir al carrito</Button>
                                        </Card>
                                        <p> </p>
                                    </div>
                                );
                            }
                        })
                        return (
                            <div class="container">
                                <strong>
                                    <h1>COLECCIÓN RUNNING</h1>
                                </strong>
                                <div class="row mt-4">
                                    {cat3}
                                </div>
                            </div>
                        );
                    }
                }
            }
        }
        return (
            <div>
                <Card>
                    <CardImg width="100%" src={logo} alt="Card image cap" />
                    <CardBody>
                        <Button outline color="secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>VER COLECCIÓN</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg src={logo2} alt="Card image cap" />
                    <CardBody>
                        <Button outline color="secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>VER COLECCIÓN</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg src={logo3} alt="Card image cap" />
                    <CardBody>
                        <Button outline color="secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>VER COLECCIÓN</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Body;