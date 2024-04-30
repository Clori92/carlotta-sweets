import React, { useState } from "react";
import { Card, Button, DropdownButton, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// I wrote all the code in here, I know maybe it will be nicer to separate the code into different components, but I wanted to keep it simple. Since it's a small project.
// Products component with 10 items, stored in an array of objects and displayed using the map method.
// With Card component from react - bootstrap, each product is displayed with an image, title, description, and price.
// A DropdownButton is used to display the available flavors for each product.The Buy button is used to add the price of the product to the total price.
// Passing props to the TotalPrice component to display the total price of the products.
function Products(props) {
    // Using the useState hook to store the selected flavors of the products. Later on I will use this to display the selected flavors. On the dropdown button.
    const [selectedFlavors, setSelectedFlavors] = useState([]);
    const handleSelectFlavor = (color, index) => {
        const newSelectedFlavors = [...selectedFlavors];
        newSelectedFlavors[index] = color;
        setSelectedFlavors(newSelectedFlavors);
    };

    // Array of objects with 10 products, each product has an id, title, description, price, image, and flavors.
    const products = [
        {
            id: 1,
            title: "Customisable Cake",
            description: "This is a customisable cake, for other modification drop a private message",
            price: 50,
            image: "images/CustomisableCake.jpg",
            flavours: ["Classic vanilla and cream", "Berries and cream", "Dark Chocolate"],
        },
        {
            id: 2,
            title: "Mini Pastries",
            description: "Assorted box of mini pastries, box of 12. Sable tart base filled with the filling of your choice.",
            price: 25,
            image: "images/pastries.jpg",
            flavours: ["Berries and creme patisserie", "Pistachio and raspberries", "Lemon merengue pie", "Chocolate and hazelnut"],
        },
        {
            id: 3,
            title: "Choux Pastry",
            description: "Assorted box of choux pastries, box of 12. Filled with the filling of your choice.",
            price: 20,
            image: "images/Choux.jpg",
            flavours: ["Vanilla creme patisserie", "Red velvet", "Chocolate"],
        },
        {
            id: 4,
            title: "Tiramisu",
            description: "Italian staple, Tiramisu, coffee soaked ladyfingers and mascarpone mousse.",
            price: 25,
            image: "images/Tiramisu.jpg",
            flavours: ["Classic", "Coconut", "Matcha"],
        },
        {
            id: 5,
            title: "Fruit Tart",
            description: "Sable base Tart filled with creme patisserie and fresh fruits of your choice.",
            price: 30,
            image: "images/FruitTart.jpg",
            flavours: ["Raspberries", "Mixed fruits", "Blueberries"],
        },
        {
            id: 6,
            title: "Cookies",
            description: "Assorted cookies, box of 12. Crunchy american style cookies made with french butter.",
            price: 6,
            image: "images/Cookies.jpg",
            flavours: ["Dark chocolate chip", "Raisins", "Raspberry"],
        },
        {
            id: 7,
            title: "Profiteroles",
            description: "Profiteroles for 10 people. Choux pastry filled with the filling of your choice, covered in chocolate.",
            price: 35,
            image: "images/Profiteroles.jpg",
            flavours: ["Chocolate", "Lemon", "Raspberry and Vanilla"],
        },
        {
            id: 8,
            title: "Chocolates",
            description: "Box of 25 chocolates. Valrhona chocolate shells with a creamy filling inside.",
            price: 15,
            image: "images/Chocolates.jpg",
            flavours: ["Caramel", "Coffee", "Oreo"],
        },
        {
            id: 9,
            title: "Cupcakes",
            description: "Assorted cupcakes box of 12. Sponge base with an Italian buttercream on top.",
            price: 20,
            image: "images/Cupcakes.jpg",
            flavours: ["Chocolate", "Lemon", "Vanilla"],
        },
        {
            id: 10,
            title: "Macarons",
            description: "Assorted Macarons box of 12. Almond cookies with a chocolate ganache filling.",
            price: 18,
            image: "images/Macarons.png",
            flavours: ["Pink, Raspberry", "Green, matcha", "Yellow, lemon"],
        },
    ];

    // Function to handle the buy button, which adds the price of the product to the total price and displays the total price.
    const handleBuy = (price) => {
        props.setTotal(props.total + price);
    };

    return (
        <div id="products" className="position-relative">
            <div className="d-flex flex-wrap justify-content-center">
                {/* Using the map method to display the products array. Each product is displayed using the Card component from react-bootstrap. */}
                {products.map((product, index) => (
                    <Card border="dark" style={{ width: "18rem" }} className="m-3 d-flex flex-column" key={product.id}>
                        <Card.Img className="pastryImage" variant="top" src={process.env.PUBLIC_URL + "/" + product.image} />
                        <Card.Body className="d-flex flex-column">
                            <div>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <DropdownButton id="flavourButton" variant="light" title={selectedFlavors[index] || "Choose your flavour"}>
                                    {/* Using the map method to display the flavors of each product in the DropdownButton component.*/}
                                    {product.flavours.map((flavour, flavourIndex) => (
                                        <Dropdown.Item key={flavourIndex} onClick={() => handleSelectFlavor(flavour, index)}>
                                            {flavour}
                                        </Dropdown.Item>
                                    ))}
                                </DropdownButton>
                                <p id="price">£{product.price}</p>
                            </div>
                            {/* Buy button that calls the handleBuy function when clicked */}
                            <Button variant="dark" className="mt-auto align-self-start" onClick={() => handleBuy(product.price)}>
                                Buy
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Products;
