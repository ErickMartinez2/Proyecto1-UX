import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody, CardHeader, CardFooter,
    CardTitle, CardSubtitle, Button, ButtonGroup, ListGroup, ListGroupItem, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';
import {
    OverlayTrigger, Popover
} from 'react-bootstrap'
import logo from "./img1.jpeg";
import logo2 from "./img2.jpeg";
import logo3 from "./img3.jpeg";
import { catalogo1 } from './Catalogo.json';
import { resolve } from 'q';

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

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = { catalogo1 };
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
        this.onRadioBtnClick1 = this.onRadioBtnClick1.bind(this);
        this.onRadioBtnClick2 = this.onRadioBtnClick2.bind(this);
        this.onRadioBtnClick3 = this.onRadioBtnClick3.bind(this);
        this.onRadioBtnClick4 = this.onRadioBtnClick4.bind(this);
        this.onRadioBtnClick5 = this.onRadioBtnClick5.bind(this);
        this.onRadioBtnClick6 = this.onRadioBtnClick6.bind(this);
    }
    onRadioBtnClick(rSelected) {
        this.setState({ rSelected });
    }
    onRadioBtnClick1(rSelected1) {
        this.setState({ rSelected1 });
    }
    onRadioBtnClick2(rSelected2) {
        this.setState({ rSelected2 });
    }
    onRadioBtnClick3(rSelected3) {
        this.setState({ rSelected3 });
    }
    onRadioBtnClick4(rSelected4) {
        this.setState({ rSelected4 });
    }
    onRadioBtnClick5(rSelected5) {
        this.setState({ rSelected5 });
    }
    onRadioBtnClick6(rSelected6) {
        this.setState({ rSelected6 });
    }
    render() {
        if (this.state.rSelected === 1) {
            return (
                <div class="container">
                    <h1>COLECCIÓN CASUAL</h1>
                    <div class="row">
                        <div class="col-sm-4">
                            <Card>
                                <img style={{ width: "100%", height: "auto" }} src={catalogo1.imagen} />
                                <p>{catalogo1.genero}</p>
                                <strong>
                                    <p>{catalogo1.nombre}</p>
                                </strong>
                                <p>{catalogo1.marca}</p>
                                <p>{catalogo1.precio}</p>
                                {ubi(catalogo1.ubicacion)}
                                <CardFooter>
                                    <p>{catalogo1.info}</p>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div >
            );
        } else {
            if (this.state.rSelected === 2) {
                return (
                    <div class="container">
                        <h1>COLECCIÓN TRAINING</h1>
                        <div class="row">
                            <div class="col-sm">
                                <Card>
                                    <img style={{ width: "100%", height: "auto" }} src="https://sportline.com.hn/pub/media/catalog/product/cache/0f831c1845fc143d00d6d1ebc49f446a/b/a/ba5335-399-phsfh000.jpg" />
                                    <p>HOMBRE</p>
                                    <strong>
                                        <p>BRASILIAN DUFFEL</p>
                                    </strong>
                                    <p>NIKE</p>
                                    <p>L 975.95</p>
                                </Card>
                            </div>
                            <div class="col-sm">
                                <Card>
                                    <img style={{ width: "100%", height: "auto" }} src="https://sportline.com.hn/pub/media/catalog/product/cache/0f831c1845fc143d00d6d1ebc49f446a/a/c/ac4058-404-phsfz001.jpg" />
                                    <p>HOMBRE</p>
                                    <strong>
                                        <p>LARGE CAPACITY</p>
                                    </strong>
                                    <p>NIKE</p>
                                    <p>L 795.95</p>
                                </Card>
                            </div>
                            <div class="col-sm">
                                <Card>
                                    <img style={{ width: "100%", height: "auto" }} src="https://sportline.com.hn/pub/media/catalog/product/cache/0f831c1845fc143d00d6d1ebc49f446a/8/8/889542-100-phsfh001.jpg" />
                                    <p>MUJER</p>
                                    <strong>
                                        <p>PRO TRAINING ALL OVER MESH</p>
                                    </strong>
                                    <p>NIKE</p>
                                    <p>L 725.95</p>
                                </Card>
                            </div>
                        </div>
                        <p> </p>
                        <div class="row">
                            <div class="col-sm">
                                <Card>
                                    <img style={{ width: "100%", height: "auto" }} src="https://sportline.com.hn/pub/media/catalog/product/cache/0f831c1845fc143d00d6d1ebc49f446a/a/a/aa7064-005-phsrh000.jpg" />
                                    <p>HOMBRE</p>
                                    <strong>
                                        <p>VARSITY COMPETE TRAINER</p>
                                    </strong>
                                    <p>NIKE</p>
                                    <p>L 2,375.95</p>
                                </Card>
                            </div>
                            <div class="col-sm">
                                <Card>
                                    <img style={{ width: "100%", height: "auto" }} src="https://sportline.com.hn/pub/media/catalog/product/cache/0f831c1845fc143d00d6d1ebc49f446a/b/a/ba5490-466-phsfh000.jpg" />
                                    <p>MUJER</p>
                                    <strong>
                                        <p>GYM CLUB</p>
                                    </strong>
                                    <p>NIKE</p>
                                    <p>L 975.95</p>
                                </Card>
                            </div>
                            <div class="col-sm">
                                <Card>
                                    <img style={{ width: "100%", height: "auto" }} src="https://sportline.com.hn/pub/media/catalog/product/cache/0f831c1845fc143d00d6d1ebc49f446a/8/3/832971-458-phsfh001.jpg" />
                                    <p>HOMBRE</p>
                                    <strong>
                                        <p>ACADEMY JACQUARD</p>
                                    </strong>
                                    <p>NIKE</p>
                                    <p>L 555.95</p>
                                </Card>
                            </div>
                        </div>
                    </div>
                );
            } else {
                if (this.state.rSelected === 3) {
                    return (
                        <div class="container">
                            <h1>COLECCIÓN RUNNING</h1>
                            <div class="row">
                                <div class="col-sm">
                                    <Card>
                                        <img style={{ width: "100%", height: "auto" }} src="https://sportline.com.hn/pub/media/catalog/product/cache/0f831c1845fc143d00d6d1ebc49f446a/9/4/942842-010-phsrh000.jpg" />
                                        <p>HOMBRE</p>
                                        <strong>
                                            <p>VAPORMAX FLYKNIT 2</p>
                                        </strong>
                                        <p>NIKE</p>
                                        <p>L 6,795.95</p>
                                    </Card>
                                </div>
                                <div class="col-sm">
                                    <Card>
                                        <img style={{ width: "100%", height: "auto" }} src="https://sportline.com.hn/pub/media/catalog/product/cache/0f831c1845fc143d00d6d1ebc49f446a/s/x/sx5462-381-phsfh001.jpg" />
                                        <p>HOMBRE</p>
                                        <strong>
                                            <p>ELITE CUSHIONED NO-SHOW</p>
                                        </strong>
                                        <p>NIKE</p>
                                        <p>L 425.95</p>
                                    </Card>
                                </div>
                                <div class="col-sm">
                                    <Card>
                                        <img style={{ width: "100%", height: "auto" }} src="https://sportline.com.hn/pub/media/catalog/product/cache/0f831c1845fc143d00d6d1ebc49f446a/8/3/833591-081-phsfh001.jpg" />
                                        <p>HOMBRE</p>
                                        <strong>
                                            <p>MILLER TOP</p>
                                        </strong>
                                        <p>NIKE</p>
                                        <p>L 855.95</p>
                                    </Card>
                                </div>
                            </div>
                            <p> </p>
                            <div class="row">
                                <div class="col-sm">
                                    <Card>
                                        <img style={{ width: "100%", height: "auto" }} src="https://sportline.com.hn/pub/media/catalog/product/cache/0f831c1845fc143d00d6d1ebc49f446a/8/9/892911-478-phslh000.jpg" />
                                        <p>HOMBRE</p>
                                        <strong>
                                            <p>DISTANCE 7"</p>
                                        </strong>
                                        <p>NIKE</p>
                                        <p>L 1,095.95</p>
                                    </Card>
                                </div>
                                <div class="col-sm">
                                    <Card>
                                        <img style={{ width: "100%", height: "auto" }} src="https://sportline.com.hn/pub/media/catalog/product/cache/0f831c1845fc143d00d6d1ebc49f446a/8/9/890353-618-phsfh001.jpg" />
                                        <p>MUJER</p>
                                        <strong>
                                            <p>RUNNING TOP</p>
                                        </strong>
                                        <p>NIKE</p>
                                        <p>L 725.95</p>
                                    </Card>
                                </div>
                                <div class="col-sm">
                                    <Card>
                                        <img style={{ width: "100%", height: "auto" }} src="https://sportline.com.hn/pub/media/catalog/product/cache/0f831c1845fc143d00d6d1ebc49f446a/9/4/942855-009-phsrh000.jpg" />
                                        <p>MUJER</p>
                                        <strong>
                                            <p>AIR ZOOM PEGASUS 35</p>
                                        </strong>
                                        <p>NIKE</p>
                                        <p>L 3,695.95</p>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    );
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