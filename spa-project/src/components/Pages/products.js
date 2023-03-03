import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
    return(
        <>
        <h1>Zobacz nasze produkty w promocji!</h1>
        <nav>
            <ul>
                <li><Link to="/products/car">Samochód</Link></li>
                <li><Link to="/products/bike">Rower</Link></li>
                <li><Link to="/products/motorcycle">Motocykl</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Products