import React from "react";

// TotalPrice component that displays the total price of the products.
function TotalPrice({ total }) {
    return <h2 className="totalPrice">Total price: £{total}</h2>;
}

export default TotalPrice;
