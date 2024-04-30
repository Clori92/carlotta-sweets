import React, { useState, useRef, useEffect } from "react";
import { Button, Form, FormGroup, FormControl, FormLabel, Image } from "react-bootstrap";
import logo from "./pastrytime.png";

// Home page component contains a form that allows the user to login with their name.
// Using useState to store the name and isLoggedIn state.
function Home(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const nameRef = useRef();

    // Using useEffect to check if the name is not empty and set the isLoggedIn state to true.
    useEffect(() => {
        if (props.name !== "") {
            setIsLoggedIn(true);
        }
    }, [props.name]);

    // Function that handles the login form submission.
    const handleLogin = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        if (name.trim() !== "") {
            props.setName(name);
        }
    };

    // Function that handles the logout button click.
    const handleLogout = () => {
        setIsLoggedIn(false);
        props.setName("");
    };

    return (
        <div id="homePage" className="d-flex">
            <div className="mx-auto">
                <Image id="homePageImage" src={logo} alt="Pastry Time Logo" />
                {isLoggedIn ? (
                    <div className="text-center">
                        <h1>Welcome {props.name}</h1>
                        <Button id="loginFormButton" variant="light" onClick={handleLogout}>
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Form onSubmit={handleLogin} className="text-center">
                        <FormGroup>
                            <FormLabel id="loginTitle" htmlFor="nameInput">
                                Please enter your name to login:
                            </FormLabel>
                            <FormControl id="nameInput" type="text" placeholder="Enter your name" ref={nameRef} required />
                        </FormGroup>
                        <Button id="loginFormButton" variant="light" type="submit">
                            Login
                        </Button>
                    </Form>
                )}
            </div>
        </div>
    );
}

export default Home;
