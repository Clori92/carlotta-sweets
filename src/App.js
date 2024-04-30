// Reminder to do npm install to install the dependencies and node_modules back.
// Reminder to do npm install react-router-dom to use the BrowserRouter, Routes, and Route components.
// Reminder to do npm install bootstrap to use the bootstrap CSS.

import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// I am sorry that I did not follow the task instructions, instead of colors, I used flavors.
// Since it's a cake webpage :)

// App component that contains the Navbar, Home, About, Products, and Footer components.
function App() {
    // Using the useState hook to store the total price of the products and the name of the user.
    // To pass the total price to the Navbar component, I am using the total prop.
    const [total, setTotal] = useState(0);
    const [name, setName] = useState("");

    return (
        <div className="App">
            <Router>
                <Navbar total={total} />
                <Routes>
                    {/* Passing the name and setName props to the Home component. */}
                    <Route path="/" element={<Home name={name} setName={setName} />} />
                    {/* Passing the total prop to the About and Products components. */}
                    <Route path="/about" element={<About total={total} />} />
                    <Route path="/products" element={<Products total={total} setTotal={setTotal} />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
