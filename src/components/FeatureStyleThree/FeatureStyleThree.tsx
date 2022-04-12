import React, {FC, Fragment} from "react";
import {FeatureStyleThreeBase} from "./FeatureStyleThree.style";
import {Col, Container, Row} from "react-bootstrap";
import {FeatureStyleThreeContent} from "../../assets/content";

interface IProps {
    title: string;
    caption: string;
}

export const FeatureStyleThree: FC<IProps> = (props) => {
    return <FeatureStyleThreeBase id="feature_style_three">
        <Container>
            {FeatureStyleThreeContent.map((item, index) => {
                    if ((item.id) % 2 != 1) {
                        return (
                            <Fragment key={index}>
                                <Row className="align-items-center">
                                    <Col md={7}>
                                        <h2 className="heading">
                                            {item.title}
                                        </h2>
                                        <p className="lead">
                                            {item.caption}
                                        </p>
                                    </Col>
                                    <Col md={5}>
                                        <img src={require("../../assets/images/" + item.img)} alt=""
                                             className="img img-fluid"/>
                                    </Col>
                                </Row>
                                <hr className="divider"/>
                            </Fragment>
                        )
                    } else {
                        return (
                            <Fragment key={index}>
                                <Row className="align-items-center">
                                    <Col md={5}>
                                        <img src={require("../../assets/images/" + item.img)} alt=""
                                             className="img img-fluid"/>
                                    </Col>
                                    <Col md={7}>
                                        <h2 className="heading">
                                            {item.title}
                                        </h2>
                                        <p className="lead">
                                            {item.caption}
                                        </p>
                                    </Col>
                                </Row>
                                <hr className="divider"/>
                            </Fragment>
                        )
                    }
                }
            )}

        </Container>
    </FeatureStyleThreeBase>
}