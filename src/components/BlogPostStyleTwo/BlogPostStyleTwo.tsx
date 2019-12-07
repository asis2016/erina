import React, {FC} from "react";
import {BlogPostStyleTwoBase} from "./BlogPostStyleTwo.style";
import {Col, Container, Row} from "react-bootstrap";
import {BlogPostStyleTwoContent} from "../../assets/content";

interface IProps {
    title: string;
    caption: string;
}

export const BlogPostStyleTwo: FC<IProps> = (props) => {
    return <BlogPostStyleTwoBase>
        <Container>

            <Row className="pb-5">
                <Col md={{span: 6, offset: 3}} className="text-center">
                    <h1>{props.title}</h1>
                    <p className="pt-3 pb-3">{props.caption}</p>
                </Col>
            </Row>

            <Row>
                {BlogPostStyleTwoContent.map((item) =>
                    <Col xs={4}>
                        <div className="card mb-4 box-shadow">
                            <img className="card-img-top"
                                 alt=""
                                 src={require("../../assets/images/" + item.img)}
                            />
                            <div className="card-body">
                                <h6 className="card-title">{item.title}</h6>
                                <p className="card-text">{item.shortContent}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button"
                                                className="btn btn-primary-erina">Ansicht-Menü
                                        </button>
                                        <button type="button" className="btn btn-secondary-outline-erina">Raumordnung
                                        </button>
                                    </div>
                                    <small className="text-muted price">€ {item.price}</small>
                                </div>
                            </div>
                        </div>
                    </Col>
                )}
            </Row>
        </Container>

    </BlogPostStyleTwoBase>
}