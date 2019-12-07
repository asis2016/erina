import React, {FC} from 'react';
import {FooterMenuStyleTwoBase} from "./FooterMenuStyleTwo.style";
import {Col, Row} from "react-bootstrap";
import {FooterMenuStyleOneContent} from "../../assets/content";

interface IProps {
    id?: number;
}

export const FooterMenuStyleTwo: FC<IProps> = (props) => {
    return <FooterMenuStyleTwoBase>
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 pt-2 col-one">
                    <a href="#">
                        <img className="logo"
                             src={require("../../assets/images/logo.png")}
                        />
                    </a>
                    <p className="pt-3">
                        Nunc varius, justo in bibendum bibendum, sem metus malesuada libero, nec dictum metus magna
                        ac elit. Integer feugiat risus eget ante congue, vel tempor libero faucibus. Donec sit amet
                        enim urna.
                    </p>
                    <p className="copyright pt-3">
                        Copyright (c) Your Company 2019.
                    </p>
                </div>
                <div className="col-4 p-2">
                    <h5>Contacts</h5>
                    <ul>
                        <li>155 Lorem Ipsum Street, Germany</li>
                        <li>mhrj.asis@gmail.com</li>
                        <li>www.asm.com.np</li>
                    </ul>

                    <h5 className="pt-5">Lorem ipsum feugiat</h5>
                    <ul>
                        <li>
                            <a href="#">Faucibus mattis felis</a>
                        </li>
                        <li>
                            <a href="#">Enim urna massa</a>
                        </li>
                        <li>
                            <a href="#">Integer feugiat Aliquam</a>
                        </li>
                        <li>
                            <a href="#">In bibendum ultrices</a>
                        </li>
                        <li>
                            <a href="#">Nunc luctus lectus</a>
                        </li>
                    </ul>
                </div>
                <div className="col-4">
                    <h5>Bibendum</h5>
                    <ul>
                        <li><a href="#">Metus Faucibus Interdum</a></li>
                        <li><a href="#">Vel tempor scelerisque</a></li>
                        <li><a href="#">Libero Faucibus cursus</a></li>
                        <li><a href="#">Varius justo risus</a></li>
                    </ul>

                    <h5 className="pt-5">Lorem ipsum</h5>
                    <ul>
                        <li>
                            <a href="#">Faucibus sodales</a>
                        </li>
                        <li>
                            <a href="#">Enim urna vitae</a>
                        </li>
                        <li>
                            <a href="#">Integer feugiat quis</a>
                        </li>
                        <li>
                            <a href="#">In bibendum pretium</a>
                        </li>
                        <li>
                            <a href="#">Nunc varius, justo</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="row no-gutters social">
            <div className="col">
                <a className="social-inner" href="#">
                    <i className="fa fa-twitter"></i> Twitter
                </a>
            </div>
            <div className="col">
                <a className="social-inner" href="#">
                    <i className="fa fa-facebook"></i> Facebook
                </a>
            </div>
            <div className="col">
                <a className="social-inner" href="#">
                    <i className="fa fa-instagram"></i> Instagram
                </a>
            </div>
            <div className="col">
                <a className="social-inner" href="#">
                    <i className="fa fa-youtube"></i> Youtube
                </a>
            </div>
        </div>
    </FooterMenuStyleTwoBase>
}