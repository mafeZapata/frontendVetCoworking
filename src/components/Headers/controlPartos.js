import React from "react";


import { Container, Row, Col } from "reactstrap";

const controlPartos = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "300px",
          backgroundImage:
            "url(" +
            require("../../assets/img/theme/partos.jpeg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
         {/* Mask */}
         <span className="mask bg-gradient-warning opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Controles de Parto</h1>
              <p className="text-white mt-0 mb-5">
                Administre los nuevos nacimientos de terneros y terneras en la finca
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default controlPartos;
