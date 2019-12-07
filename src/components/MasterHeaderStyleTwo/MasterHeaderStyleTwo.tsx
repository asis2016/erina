import React, {FC} from 'react'
import {Carousel, Col, Container, Row} from "react-bootstrap";
import {MasterHeaderStyleTwoCarouselContent} from "../../assets/content";
import {NavigationStyleTwo} from "../NavigationStyleTwo/NavigationStyleTwo";
import {MasterHeaderStyleTwoBase} from "./MasterHeaderStyleTwo.style";

interface IProps {
    title?: string;
}

export const MasterHeaderStyleTwo: FC<IProps> = (props) => {
    return <MasterHeaderStyleTwoBase>

        {/* Navigation */}
        <NavigationStyleTwo navbarBrand="Lynne Travel"/>

        <Carousel>
            {MasterHeaderStyleTwoCarouselContent.map((item) =>
                <div className="carousel-item"
                     style={{backgroundImage: "url(" + require("../../assets/images/" + item.img) + ")"}}>
                    <div className="overlay"></div>


                    <div className="container-fluid carousel-item-content">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <h1>{item.title}</h1>
                                <p>{item.caption}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Carousel>

        {/* */}
        <div className="container-fluid search">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="input-group input-group-lg">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-bed"></i>
                            </span>
                        </div>
                        <input type="text" aria-label="First name" className="form-control"/>
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-users"></i>
                            </span>
                        </div>
                        <input type="text" aria-label="First name" className="form-control"/>
                        <div className="input-group-prepend">
                            <button className="btn btn-primary-erina" type="button">
                                Jetzt suchen <i className="fa fa-search"></i>
                            </button>
                        </div>
                        <div className="input-group-prepend">
                            <button className="btn btn-primary-outline-erina" type="button">
                                Mehr Optionen  &nbsp;<i className="fa fa-chevron-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </MasterHeaderStyleTwoBase>
}