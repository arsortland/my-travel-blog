import React from "react"
import globe from "../images/globe.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={globe}/>
            <h2>my travel journal.</h2>
        </nav>
    )
}