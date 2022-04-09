import React, {FC} from "react";
import {GalleryStyleOneBase} from "./GalleryStyleOne.style";
import {Col, Container, Row} from "react-bootstrap";
import {GalleryStyleOneContent} from "../../assets/content";


interface IProps {
    title: string;
    caption: string;
}

export const GalleryStyleOne: FC<IProps> = (props) => {

    return <GalleryStyleOneBase>

        <Container>
            <Row className="pb-5">
                <Col md={{span: 6, offset: 3}} className="text-center">
                    <h1>{props.title}</h1>
                    <p className="pt-3 pb-3">{props.caption}</p>

                    <div>
                        <button type="button" className="btn btn-secondary-erina mr-2">Latest</button>
                        <button type="button" className="btn btn-secondary-erina mr-2">Instagram</button>
                        <button type="button" className="btn btn-secondary-erina mr-2">Blog</button>
                        <button type="button" className="btn btn-secondary-erina mr-2">Travel</button>
                    </div>
                </Col>
            </Row>

            <Row>
                {GalleryStyleOneContent.map((item, index) =>
                    <Col className="p-2 gallery lg-2 md-4 xs-12 sm-6" key={index}>
                        <img src={require("../../assets/images/gallery/" + item.img)} alt="" className="gallery-img"/>
                        <div className="overlay"></div>
                        <span className="badge badge-primary-erina">{item.tag}</span>
                    </Col>
                )}
            </Row>

        </Container>

    </GalleryStyleOneBase>
}