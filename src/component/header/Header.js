import React from "react";
import './Header.css'
import Navbar from "../navbar/Navbar";
import Banner from "../banner/Banner";

class Header extends React.Component {
    render() {
        return (
            <div className="Header container-md ">
                <Banner/>
                <Navbar/>
            </div>
        );
    }
}

export default Header;