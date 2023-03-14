import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../App.css"
import { APIFetch, ParentDesktopComponent, UpdateButton  } from "./fetch";
import separator from "../Assets/pattern-divider-desktop.svg";
import dice from "../Assets/icon-dice.svg";

export default function Desktop() {
    return (
        <>
            <Container className="d-flex centerBox">
                <Row>
                    {/* <img src={dice} className="diceIcon" alt="What" /> */}
                    <ParentDesktopComponent/>
                    <br/>
                        {/* <button className="circle-btn"></button>
                        <img src={dice} alt="button icon" className="button-icon" /> */}
                </Row>
            </Container>
        </>
    );
}