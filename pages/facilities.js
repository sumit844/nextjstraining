import React from "react";
import Header from "../src/components/header";
import Navbar from "../src/components/navbar";
import Footer from "../src/components/footer";
import Link from "next/link";
const Facility = () => {

    return (
        <> 
            <p>This is Facility page</p>
            <ul>
                <li><Link href="/facilities/labs"> Labs</Link></li>
                <li><Link href="/facilities/sports">sports</Link></li>
                <li><Link href="/facilities/hostels">Hostles</Link></li>
                <li><Link href="/facilities/food">Food</Link></li>
            </ul>
        </>
    )
}

export default Facility;