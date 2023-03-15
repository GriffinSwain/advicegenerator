import React from "react";
import { Container, Row } from "react-bootstrap";
import "../Mobile.css"
import { ParentMobileComponent} from "./fetchM";

export default function Mobile() {
    return (
        <>
            <Container className="d-flex mobileBox">
                <Row>
                    <ParentMobileComponent/>
                    <br/>
                    <br/>
                </Row>
            </Container>
        </>
    );
}