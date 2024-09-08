import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendar} from "@fortawesome/free-solid-svg-icons/faCalendar";
import {Button} from "react-bootstrap";

class MainLeft extends React.Component {
    render() {
        let postList = [
            {
                postDate: "June 2024",
                postContent: {
                    imageUrl: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/7df374a4c871b40e07b210520808f38751214251-1280x720.jpg",
                    imageAlt: "hello",
                    subject: "Post Subject",
                    categoryName: "Post Category",
                    hashTagList: [
                        "#hashtag1",
                        "#hashtag2",
                        "#hashtag3"
                    ],
                    postTime: "15:04:03 06/06/2024",
                    description: "This is the post description"
                }
            }, {
                postDate: "June 2024",
                postContent: {
                    imageUrl: "https://static.gosugamers.net/c7/00/90/ec9fa1478899a0ec3fca6edc9062fd8bb7710c259f59000e20d9a21d9b.webp?w=1600",
                    imageAlt: "hello",
                    subject: "Post Subject",
                    categoryName: "Post Category",
                    hashTagList: [
                        "#hashtag1",
                        "#hashtag2",
                        "#hashtag3"
                    ],
                    postTime: "15:04:03 06/06/2024",
                    description: "This is the post description"
                }
            }
        ]
        return (
            <div className="container-fluid p-0 m-0">
                {postList.map((post) => (
                    <div className="row m-0 bg-body pe-0 ps-0 mb-2 pe-sm-0">
                        <div className="col-lg-1 col-md-12 ps-xl-2 ps-md-3 pe-0 pe-sm-0 text-start">
                            <span className="fs-3 text-secondary">
                                <FontAwesomeIcon icon={faCalendar}/>
                            <span> {post.postDate}</span>
                            </span>
                        </div>
                        <div className="col-lg-11 col-md-12 row pe-0 ps-0 m-0">
                            <div className="col-12 order-lg-1 col-sm-12 order-last m-0 p-0">
                                <img className="img-fluid" src={post.postContent.imageUrl}
                                     alt={post.postContent.imageAlt}/>
                            </div>
                            <div className="col-12 order-lg-2 col-sm-12 order-first pt-3 text-start">
                                <div className="col-lg-12 ">
                                    <h1>{post.postContent.subject}</h1>
                                </div>
                                <div className="col-lg-12  row m-0 p-0">
                                    <div className="col-lg-6 col-md-12 p-0">
                                        <span className="text-secondary">{post.postContent.categoryName}</span>
                                    </div>
                                    <div className="col-lg-6 col-md-6 p-0">
                                        <span className="text-secondary">{post.postContent.postTime}</span>
                                    </div>
                                    <div className="col-lg-6 col-md-12 p-0">
                                        <span
                                            className="text-secondary">{post.postContent.hashTagList.map((hashTag) => (
                                            <span className="badge bg-secondary-subtle text-white me-2">{hashTag}</span>
                                        ))}</span>
                                    </div>
                                </div>
                                <div className="col-12 pt-5">
                                    <span className="text-secondary">{post.postContent.description}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 p-sm-1 p-md-2">
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default MainLeft;