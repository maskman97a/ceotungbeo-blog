import React from "react";

class Banner extends React.Component {
    render() {
        return (
            <div className="row align-items-center border-bottom pb-3 m-0 w-100 h-75"
                 style={{
                     cursor: "pointer",
                     overflow: "hidden",
                     position: `relative`,
                     paddingBottom: `25%`
                 }}>
                <img className="img-fluid h-75" src={`${process.env.PUBLIC_URL}/images/banner.png`} alt="banner"
                     style={{
                         objectPosition: "center",
                         objectFit: "cover",
                         top: `50%`,
                         left: '50%'
                     }}/>
            </div>
        )
    }
}

export default Banner;