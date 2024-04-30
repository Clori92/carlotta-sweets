import { Figure, Col, Row } from "react-bootstrap";
import logo from "./logo.png";

// Importing and using Figure, Col, and Row from react-bootstrap. Importing the logo image.
// About page component contains: store's logo, short description of the store, and two images of the fictional pastry shop. And how to contact me (fake number).
function About() {
    return (
        <div id="about">
            <Row className="justify-content-md-center">
                <Col md={4}>
                    <Figure className="text-center">
                        <Figure.Image alt="Fictional Logo" src={logo} />
                        <Figure.Caption id="caption">
                            <strong>Carlotta Sweets</strong>' store really existed, after Covid I opened my own home food business. <br />I am a
                            <strong>professional pastry chef</strong> and I have been working in the food industry for over 10 years, now I found myself studying tech in Hyperion
                            Dev.
                            <br />
                            As you can see from this website, I love pink. I was selling my creations during lockdown.
                            <div className="heartEmoji">&#10083;</div>
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row>
            <Row className="aboutPageFigures">
                <Col id="aboutImages" xs={12} md={4}>
                    <Figure className="text-center">
                        <Figure.Image alt="Fictional Pastry Shop 1" src={process.env.PUBLIC_URL + "/images/pastryshop.jpg"} />
                        <Figure.Caption id="caption">
                            This is my fictional shop how it supposed to look like if one day I open my own.
                            <br />
                            We also <strong>deliver</strong> our cakes so if you want to know anything more, <strong>contact us</strong>.
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col>
                    <Figure className="text-center">
                        <Figure.Image alt="Fictional Pastry Shop 2" src={process.env.PUBLIC_URL + "/images/pastryshop2.jpg"} />
                        <Figure.Caption id="caption">
                            <strong>Please Contact me here:</strong> +44 7593221598 or check my Instagram!
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row>
        </div>
    );
}

export default About;
