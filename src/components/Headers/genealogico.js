import React from "react";


import { Container, Row, Col } from "reactstrap";

const genealogico = () => {
  return (
    <>
      <div
        className="header pb-10 pt-2 pt-lg-6 d-flex align-items-center"
        style={{
          minHeight: "500px",
          backgroundImage:
            "url(" +
            require("../../assets/img/theme/genealogico.jpeg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-success opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-1 text-white">Genealogía del Bovino</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default genealogico;
