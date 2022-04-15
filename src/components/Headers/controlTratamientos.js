import React from "react";


import { Container, Row, Col } from "reactstrap";

const controlTratamientos = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "300px",
          backgroundImage:
            "url(" +
            require("../../assets/img/theme/tratamientos.jpeg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
         {/* Mask */}
         <span className="mask bg-gradient-info opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Control de Tratamientos</h1>
              <p className="text-white mt-0 mb-5">
                Gestione los tratamientos veterinarios que se le realizan a cada bovino
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default controlTratamientos;
