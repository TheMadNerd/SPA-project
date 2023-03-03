import React from "react";
import {Route, Routes} from 'react-router-dom'

import Start from './Pages/start'
import Products from './Pages/products'
import Contact from './Pages/contact'
import Admin from './Pages/admin'

const Page = () => {
    return(
        <>
            <Routes>

                <Route exact path="/"  element={Start()} />
                <Route  path="/products"  element={Products()} />
                <Route  path="/contact"  element={Contact()} />
                <Route  path="/admin"  element={Admin()} />

            </Routes>
        </>
    )
}

export default Page