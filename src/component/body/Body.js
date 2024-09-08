import React from "react";
import MainRight from "../main/main-right/MainRight";
import MainLeft from "../main/main-left/MainLeft";
import SpotlightImage from "../main/main-spotlight/SpotlightImage";

const Body = ({mainData}) => {
    let spotlightImages = JSON.parse(mainData).spotlightImages;
    return (
        <div className="Body container-fluid pt-2 ps-0 pe-0 mt-300 bg-secondary-subtle">
            <div className="container-sm p-0">

                <SpotlightImage primaryImages={spotlightImages}/>
                <div className="row m-0 ps-0 pe-0 pt-2">
                    <div className="col-lg-9 order-lg-1 col-md-12 order-2 row m-0 ps-0 pe-md-3 pe-0">
                        <MainLeft/>
                    </div>
                    <div className="col-lg-3 order-lg-2 col-md-12 order-1 p-0 mb-2">
                        <div className="col-12 p-5 m-0 bg-body">
                            <MainRight/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;