import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody, CardHeader, CardFooter, Popover,
    CardTitle, CardSubtitle, Button, ButtonGroup, ListGroup, ListGroupItem, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';
import {
    OverlayTrigger
} from 'react-bootstrap'
import logo from "./img1.jpeg";
import logo2 from "./img2.jpeg";
import logo3 from "./img3.jpeg";

const popover = (
    <Popover id="popover-basic" title="Popover right">
        And here's some <strong>amazing</strong> content. It's very engaging. right?
    </Popover>
);

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
        this.onRadioBtnClick1 = this.onRadioBtnClick1.bind(this);
    }
    onRadioBtnClick(rSelected) {
        this.setState({ rSelected });
    }
    onRadioBtnClick1(rSelected1) {
        this.setState({ rSelected1 });
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
                                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                    <Button variant="success">Click me to see</Button>
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