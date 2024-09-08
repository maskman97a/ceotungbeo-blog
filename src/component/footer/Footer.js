import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer container-fluid bg-dark bg-gradient text-white">
                <div className="container">
                    <div className="row m-0 pt-5 pb-5">
                        <div className="col-4 text-start ps-0">
                            <div className="col-12 mb-4">
                                ABOUT ME
                            </div>
                            <div className="col-12">
                                <span>PHẠM THANH TÙNG</span>
                                <br/>
                                <span>TEL: 0328760158</span>
                                <br/>
                                <div className="row align-items-center justify-content-center align-self-center">
                                    <span
                                        className=" align-self-center ">WEBSITE: <a
                                        className="btn text-white"
                                        href="http://ceotungbeo.click">http://ceotungbeo.click</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 text-start"></div>
                        <div className="col-4 text-start"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;