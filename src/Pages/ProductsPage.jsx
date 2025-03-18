import { lazy } from "react";
import Navbar from "../Navbar/components/Navbar";

import { Memberships } from "../products/Memberships.jsx";
const  Products = lazy(() => import('../products/Products.jsx'));

export default function ProductsPage () {
    return(
        <>
        <header>
            <Navbar/>
        </header>
        <main>
            <Products/>
            <Memberships/> 
        </main>
        </>
    )
}