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

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                        <div class="col-sm">
                            <Card>
                                <img style={{ width: "100%", height: "auto" }} src="https://sportline.com.hn/pub/media/catalog/product/cache/0f831c1845fc143d00d6d1ebc49f446a/8/3/831731-685-phsfh001.jpg" />
                                <p>MUJER</p>
                                <strong>
                                    <p>SPORTSWEAR ESSENTIAL</p>
                                </strong>
                                <p>NIKE</p>
                                <p>L 925.95</p>
                                <OverlayTrigger trigger="click" placement="top" overlay={popover2}>
                                    <Button outline color="secondary" variant="success">VER UBICACIÓN</Button>
                                </OverlayTrigger>
                                <CardFooter>
                                    <p>TALLA</p>
                                    <ButtonGroup>
                                        <Button outline color="info" onClick={() => this.onRadioBtnClick1(1)} active={this.state.rSelected1 === 1}>S</Button>
                                        <Button outline color="info" onClick={() => this.onRadioBtnClick1(2)} active={this.state.rSelected1 === 2}>M</Button>
                                        <Button outline color="info" onClick={() => this.onRadioBtnClick1(3)} active={this.state.rSelected1 === 3}>L</Button>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        </div>
                        <div class="col-sm">
                            <Card>
                                <img style={{ width: "100%", height: "auto" }} src="https://sportline.com.hn/pub/media/catalog/product/cache/0f831c1845fc143d00d6d1ebc49f446a/9/2/921669-008-phsrh000.jpg" />
                                <p>HOMBRE</p>
                                <strong>
                                    <p>TANJUN RACER</p>
                                </strong>
                                <p>NIKE</p>
                                <p>L 2,275.95</p>
                                <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                                    <Button outline color="secondary" variant="success">VER UBICACIÓN</Button>
                                </OverlayTrigger>
                                <CardFooter>
                                    <p>TALLA DE CALZADO</p>
                                    <ButtonGroup>
                                        <Button outline color="info" onClick={() => this.onRadioBtnClick2(1)} active={this.state.rSelected2 === 1}>7.5</Button>
                                        <Button outline color="info" onClick={() => this.onRadioBtnClick2(2)} active={this.state.rSelected2 === 2}>9</Button>
                                        <Button outline color="info" onClick={() => this.onRadioBtnClick2(3)} active={this.state.rSelected2 === 3}>9.5</Button>
                                        <Button outline color="info" onClick={() => this.onRadioBtnClick2(4)} active={this.state.rSelected2 === 4}>10</Button>
                                        <Button outline color="info" onClick={() => this.onRadioBtnClick2(5)} active={this.state.rSelected2 === 5}>10.5</Button>
                                        <Button outline color="info" onClick={() => this.onRadioBtnClick2(6)} active={this.state.rSelected2 === 6}>11</Button>
                                        <Button outline color="info" onClick={() => this.onRadioBtnClick2(7)} active={this.state.rSelected2 === 7}>12</Button>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        </div>
                        <div class="col-sm">
                            <Card>
                                <img style={{ width: "100%", height: "auto" }} src="https://sportline.com.hn/pub/media/catalog/product/cache/0f831c1845fc143d00d6d1ebc49f446a/b/a/ba5405-452-phsfh000.jpg" />
                                <p>UNISEX</p>
                                <strong>
                                    <p>ELEMENTAL SWOOSH</p>
                                </strong>
                                <p>NIKE</p>
                                <p>L 825.95</p>
                                <OverlayTrigger trigger="click" placement="top" overlay={popover3}>
                                    <Button outline color="secondary" variant="success">VER UBICACIÓN</Button>
                                </OverlayTrigger>
                                <CardFooter>
                                    <p>TALLA MISC</p>
                                    <ButtonGroup>
                                        <Button outline color="info" onClick={() => this.onRadioBtnClick3(1)} active={this.state.rSelected3 === 1}>Unica</Button>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                    <p> </p>
                    <div class="row">
                        <div class="col-sm">
                            <Card>
                                <img style={{ width: "100%", height: "auto" }} src="https://sportline.com.hn/pub/media/catalog/product/cache/0f831c1845fc143d00d6d1ebc49f446a/9/1/918227-014-phsrh000.jpg" />
                                <p>HOMBRE</p>
                                <strong>
                                    <p>DUALTONE RACER</p>
                                </strong>
                                <p>NIKE</p>
                                <p>L 2,875.95</p>
                                <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                                    <Button outline color="secondary" variant="success">VER UBICACIÓN</Button>
                                </OverlayTrigger>
                                <CardFooter>
                                    <p>TALLA DE CALZADO</p>
                                    <ButtonGroup>
                                        <Button outline color="info" onClick={() => this.onRadioBtnClick4(1)} active={this.state.rSelected4 === 1}>7</Button>
                                        <Button outline color="info" onClick={() => this.onRadioBtnClick4(2)} active={this.state.rSelected4 === 2}>7.5</Button>
                                        <Button outline color="info" onClick={() => this.onRadioBtnClick4(3)} active={this.state.rSelected4 === 3}>9</Button>
                                        <Button outline color="info" onClick={() => this.onRadioBtnClick4(3)} active={this.state.rSelected4 === 3}>9.5</Button>
                                        <Button outline color="info" onClick={() => this.onRadioBtnClick4(3)} active={this.state.rSelected4 === 3}>10.5</Button>
                                        <Button outline color="info" onClick={() => this.onRadioBtnClick4(3)} active={this.state.rSelected4 === 3}>11</Button>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        </div>
                        <div class="col-sm">
                            <Card>
                                <img style={{ width: "100%", height: "auto" }} src="https://sportline.com.hn/pub/media/catalog/product/cache/0f831c1845fc143d00d6d1ebc49f446a/b/a/ba5231-016-phsfh000.jpg" />
                                <p>UNISEX</p>
                                <strong>
                                    <p>ALL ACCESS SOLEDAY</p>
                                </strong>
                                <p>NIKE</p>
                                <p>L 1,055.95</p>
                                <OverlayTrigger trigger="click" placement="top" overlay={popover3}>
                                    <Button outline color="secondary" variant="success">VER UBICACIÓN</Button>
                                </OverlayTrigger>
                                <CardFooter>
                                    <p>TALLA MISC</p>
                                    <ButtonGroup>
                                        <Button outline color="info" onClick={() => this.onRadioBtnClick5(1)} active={this.state.rSelected5 === 1}>Unica</Button>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        </div>
                        <div class="col-sm">
                            <Card>
                                <img style={{ width: "100%", height: "auto" }} src="https://sportline.com.hn/pub/media/catalog/product/cache/0f831c1845fc143d00d6d1ebc49f446a/9/1/916780-008-phslh000.jpg" />
                                <p>HOMBRE</p>
                                <strong>
                                    <p>CK RACER</p>
                                </strong>
                                <p>NIKE</p>
                                <p>L 999.99</p>
                                <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                                    <Button outline color="secondary" variant="success">VER UBICACIÓN</Button>
                                </OverlayTrigger>
                                <CardFooter>
                                    <p>TALLA DE CALZADO</p>
                                    <ButtonGroup>
                                        <Button outline color="info" onClick={() => this.onRadioBtnClick6(1)} active={this.state.rSelected6 === 1}>10.5</Button>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
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