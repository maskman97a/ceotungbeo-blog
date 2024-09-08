import React from "react";

class MainRight extends React.Component {
    render() {
        return (
            <div className="container-fluid p-0 row m-0 align-items-center justify-content-center">
                <div className="col-12 mb-3">
                                <span style={{
                                    fontSize: 25,
                                    fontFamily: "fantasy",
                                    display: "inline-block",
                                    borderBottom: '1px solid black'
                                }}>ABOUT
                                    ME</span>
                </div>
                <div className="col-9 p-4">
                    <div className="ratio ratio-1x1">
                        <img className="rounded shadow border border-3"
                             src={`${process.env.PUBLIC_URL}/images/avatar.png`} alt="Avatar"/>
                    </div>
                </div>
                <div className="col-12 text-center">
                            <span>
                                Hello everyone! My name is <b>Tung. </b> <br/>
                                I was born in 1997 in Ha Noi city. <br/>
                                I'm a Java Backend Developer. <br/> Now, i'm working for Viettel Software Services
                            </span>
                </div>
            </div>
        );
    }
}

export default MainRight;