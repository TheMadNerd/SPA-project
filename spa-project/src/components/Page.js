import React from "react";
import {Route, Routes} from 'react-router-dom'

import Start from './Pages/start'
import Products from './Pages/products'
import Contact from './Pages/contact'
import Admin from './Pages/admin'
import ProductPage from './Pages/Pages-components/product'

const Page = () => {
    return(
        <>
            <Routes>

                <Route exact path="/"  element={Start()} />
                <Route  path="/products"  element={Products()} />
                <Route  path="/contact"  element={Contact()} />
                <Route  path="/admin"  element={Admin()} />
                <Route  path="/products/:id"  element={ProductPage()} />

            </Routes>
        </>
    )
}

export default Page