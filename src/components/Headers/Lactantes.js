import React from "react";
import { Link } from "react-router-dom";


import { Container, Row, Col, Button } from "reactstrap";

const Novillonas = () => {
  return (
    <>
      <div
        className="header pb-7 pt-4 pt-lg-7 d-flex align-items-center"
        style={{
          minHeight: "400px",
          backgroundImage:
            "url(" +
            require("../../assets/img/theme/novillonas.jpeg").default +
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
            <Col lg="7" md="7">
              <div className="text-left">
                <Button
                  className="btn-neutral btn-icon mr-2"
                  color="info"
                  to="/admin/bovinos" tag={Link}
                >
                  <i className="ni ni-bold-left" />
                </Button>
              </div>
              <br></br>
              <h1 className="display-2 text-white text-center">Vacas Lactantes</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Novillonas;
