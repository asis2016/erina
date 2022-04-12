import React, {FC} from "react";
import {FeatureStyleTwoBase} from "./FeatureStyleTwo.style";
import {Col, Container, Row} from "react-bootstrap";
import {FeatureStyleTwoContent} from "../../assets/content";

interface IProps {
    title: string;
    caption: string;
}

export const FeatureStyleTwo: FC<IProps> = (props) => {
    return <FeatureStyleTwoBase id="feature_style_two">
        <Container>
            <Row className="pb-5">
                <Col md={{span: 6, offset: 3}} className="text-center">
                    <h1>{props.title}</h1>
                    <p className="pt-3 pb-3">{props.caption}</p>
                </Col>
            </Row>
            <Row>
                {FeatureStyleTwoContent.map((item, index) =>
                    <Col className={"text-center p-3"} key={index}>
                        <i className={`fa fa-` + item.faIcon}></i>
                        <h4 className="pt-2">{item.title}</h4>
                        <p>{item.caption}</p>
                        <p>
                        <button className="btn btn-primary-erina">View details</button>
                        </p>
                    </Col>
                )}
            </Row>
        </Container>
    </FeatureStyleTwoBase>
}