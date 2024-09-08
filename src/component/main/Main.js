import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "../header/Header";
import Body from "../body/Body";
import Footer from "../footer/Footer";


const Main = ({mainData}) => {
    return (
        <div className="App">
            <Header/>
            <Body mainData={mainData}/>
            <Footer/>
        </div>
    );
}

export default Main;