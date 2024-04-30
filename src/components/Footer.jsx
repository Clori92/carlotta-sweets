import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

// Simple footer component that displays the current year and the name of the website.
function MyFooter() {
    return (
        <footer id="footer">
            <Container>
                <Row>
                    <Col>
                        &copy; {new Date().getFullYear()} Carlotta Sweets
                        <br />
                        All desserts images are personal creations
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default MyFooter;
