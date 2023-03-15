import React from "react";
import { Link } from "react-router-dom";

const products = ["car", "bike", "motorcycle"]

const Products = () => {

    const list = products.map(product => (
        <li key={product}>
            <Link to={`/products/${product}`}>{product}</Link>
        </li>
    )) 

    return(
        <>
        <h1>Zobacz nasze produkty w promocji!</h1>
        <nav>
            <ul>
                {list}
            </ul>
        </nav>
        </>
    )
}

export default Products