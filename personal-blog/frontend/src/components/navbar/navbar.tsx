import { useState } from "react";
import './navbar.css'


const Navbar = () =>{
    return(
        <div className="Navbar">
            <div className="NavbarContainer">
                <a href="#">Home</a>
                <a href="#">About me</a>
                <a href="#">My work</a>
                <a href="#">Let's connect</a>
                <a href="#">Download my CV</a>



            </div>

        </div>
    )
}

export default Navbar