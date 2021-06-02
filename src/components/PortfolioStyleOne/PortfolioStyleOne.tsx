import React, {FC} from "react"
import {Card, Carousel, Col, Image, Row} from "react-bootstrap";
import {PortfolioStyleOneContent} from "../../assets/content";
import {PortfolioStyleOneBase} from "./PortfolioStyleOne.style";

interface IProps {
    title: string;
    caption: string;
}

export const PortfolioStyleOne: FC<IProps> = (props) => {
    return <PortfolioStyleOneBase>
        <div className="container">

            <Row className="pt-5">
                <Col md={{span: 6, offset: 3}} className="text-center">
                    <h1>{props.title}</h1>
                    <p className="pt-3">{props.caption}</p>
                </Col>
            </Row>

            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <Carousel>
                        {PortfolioStyleOneContent.map((item, index) =>
                            <Carousel.Item key={index}>
                                <Card>
                                    <Card.Body>
                                        <Image src={require(`../../assets/images/` + item.imageUrl)} fluid/>
                                        <h4 className="pt-4">{item.name}</h4>
                                        <p>
                                            {item.content}
                                        </p>
                                        <p>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                        )}
                    </Carousel>
                </div>
            </div>
        </div>
    </PortfolioStyleOneBase>


}