import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../Mobile.css"
import { APIFetch, ParentMobileComponent, UpdateButton  } from "./fetchM";

export default function Mobile() {
    return (
        <>
            <Container className="d-flex mobileBox">
                <Row>
                    {/* <img src={dice} className="diceIcon" alt="What" /> */}
                    <ParentMobileComponent/>
                    <br/>
                    <br/>
                        {/* <button className="circle-btn"></button>
                        <img src={dice} alt="button icon" className="button-icon" /> */}
                </Row>
            </Container>
        </>
    );
}