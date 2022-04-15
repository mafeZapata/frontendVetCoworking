import React from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col, Button} from "reactstrap";

const actualizarMedicamentosH = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "300px",
          backgroundImage:
            "url(" +
            require("../../assets/img/theme/medicamentos.jpeg").default +
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
            <div className="text-left">
              <Button
                className="btn-warning btn-icon mr-4"
                to="/admin/medicamentos" tag={Link}
              >
                 <i className="ni ni-bold-left" />
              </Button>           
            </div>
              <h1 className="display-2 text-white">Actualizar Medicamentos</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default actualizarMedicamentosH;
