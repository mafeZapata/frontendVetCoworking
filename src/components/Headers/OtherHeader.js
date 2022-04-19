
import React from "react";


import {  CardTitle, Container } from "reactstrap";

const Header = () => {
    return (
        <>
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
                <Container fluid>
                    <CardTitle
                        tag="h2"
                        className="text-uppercase text-muted mb-0"
                    >
                        Bienvenido a VetCoworking
                        </CardTitle>
                </Container>
            </div>
        </>
    );
};

export default Header;