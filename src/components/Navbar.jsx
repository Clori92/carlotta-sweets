import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import TotalPrice from "./TotalPrice";
import { Col, Row } from "react-bootstrap";

// Create a Navbar component that displays the logo and navigation links to the Home, Products, and About pages.
function MyNavbar(props) {
    // Using the useLocation and useNavigate hooks to get the current location and navigate to different pages.
    const location = useLocation();
    const navigate = useNavigate();
    const [isTotalVisible, setIsTotalVisible] = useState(true);

    // Using the useEffect hook to check if the current location is the Home page and hide the total price.
    useEffect(() => {
        if (location.pathname === "/") {
            setIsTotalVisible(false);
        } else {
            setIsTotalVisible(true);
        }
    }, [location]);

    return (
        <Row id="navbarRow">
            <Col xs={3}></Col>
            <Col>
                <Navbar id="navbar">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto nav-center">
                            <Nav.Link className="navLinkCustom" onClick={() => navigate("/")}>
                                Home
                            </Nav.Link>
                            <Nav.Link className="navLinkCustom" onClick={() => navigate("/products")}>
                                Products
                            </Nav.Link>
                            <Nav.Link className="navLinkCustom" onClick={() => navigate("/about")}>
                                About
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
            <Col xs={3} className="text-end">
                {isTotalVisible && <TotalPrice total={props.total} />}
            </Col>
        </Row>
    );
}

export default MyNavbar;
