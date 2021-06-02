import React, {FC} from 'react'
import {MasterHeaderStyleTwoBase, MastHeadBase} from "./MasterHeaderStyleTwo.style";
import {Container} from "react-bootstrap";

interface IProps {
    title?: string;
}

export const MasterHeaderStyleTwo: FC<IProps> = (props) => {
    return (
        <MasterHeaderStyleTwoBase>
            <MastHeadBase>
                <div className="overlay"></div>
                <Container>
                    <h1 className="masthead-subheading">
                        An einem Tag schön, am nächsten perfekt.
                    </h1>
                    <p className="masthead-heading">
                        Willkommen bei Erina!
                    </p>
                    <a className="btn btn-primary-erina btn-xl text-uppercase" href="#">
                        Erzählen Sie mehr
                    </a>
                </Container>
            </MastHeadBase>
        </MasterHeaderStyleTwoBase>
    );
}