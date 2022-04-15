import React from "react";


import { Container, Row, Col } from "reactstrap";

const PotrerosH = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "500px",
          backgroundImage:
            "url(" +
            require("../../assets/img/theme/potreros.jpeg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
         {/* Mask */}
         <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Gestión de Potreros</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PotrerosH;
