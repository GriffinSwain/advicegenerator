import React from "react";
import { Container, Row } from "react-bootstrap";
import "../App.css"
import { ParentDesktopComponent} from "./fetch";


export default function Desktop() {
    return (
        <>
            <Container className="d-flex centerBox">
                <Row>
                    <ParentDesktopComponent/>
                    <br/>
                    <br/>
                    <br/>
                </Row>
            </Container>
        </>
    );
}