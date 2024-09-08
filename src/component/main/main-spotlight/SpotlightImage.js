import React from "react";
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SpotlightImage = ({primaryImages}) => {
    console.log(primaryImages)
    let publicDir = `${process.env.PUBLIC_URL}`;
    return (
        <Carousel>
            {primaryImages.map((image) => (
                <Carousel.Item>
                    <div style={{
                        overflow: "hidden",
                        width: '100%',
                        height: 0,
                        paddingBottom: '37%',
                        position: `relative`
                    }}>
                        <img
                            className="d-block w-100"
                            src={image.src}
                            alt={image.alt}
                            style={{
                                objectFit: "contain",
                                objectPosition: "center",
                                transform: "translate('-50%', '-50%')"
                            }}
                        />
                        <Carousel.Caption>
                            <h3>{image.caption}</h3>
                            <p>{image.content}</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default SpotlightImage;