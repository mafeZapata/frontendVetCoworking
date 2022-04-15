import React from "react";


import { Container, Row, Col } from "reactstrap";

const controlCelo = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "300px",
          backgroundColor:"info",
          backgroundPosition: "center top",
        }}
      >
         {/* Mask */}
         <span className="mask bg-gradient-danger opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Controles de Celo</h1>
              <p className="text-white mt-0 mb-5">
                Administre los periodos cuando la vaca esta en calor y esta en celo con el toro
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default controlCelo;
