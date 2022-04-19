import React from "react";
import { Link } from 'react-router-dom'
import imagenes from './imagenes'


import * as SimpleIcons from 'react-icons/si'

import { Button, Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";



const Header = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-9 pt-5 pt-md-8">
        <Container fluid>
        <Col lg="7" md="10">
              <h1 className="display-2 text-white">Opciones</h1>
              <br></br>
            </Col>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-8 mb-xl-0">
                  <Button>
                    <Link to={'/admin/terneraslevante'}>
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Reserva de consultorios
                        </CardTitle>
                        <img src={imagenes.clientes} alt="Clientes" style = {{ height:150, width: 150,}}/>
                        { /* </div>
                       <Col className="col-auto">
                          <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                            <i className="fas fa-horse" />
                          </div>  
                          
                        </Col>*/}
                        </div>
                      </Row>
                    </CardBody>
                    </Link>
                  </Button>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                <Button>
                    <Link to={'/admin/ternerasdestetadas'}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Pacientes
                        </CardTitle>
                        <img src={imagenes.clientes} alt="Clientes" style = {{ height:150, width: 150,}}/>
                      {/*</div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>*/}
                      </div>
                    </Row>
                  </CardBody>
                  </Link>
                  </Button>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                <Button>
                    <Link to={'/admin/novillonas'}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Reservaciones
                        </CardTitle>
                        <img src={imagenes.clientes} alt="Clientes" style = {{ height:150, width: 150,}}/>
                      {/* </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                          <i className="fas fa-file-medical-alt" />
                        </div>
                      </Col>*/}
                      </div>
                    </Row>
                  </CardBody>
                  </Link>
                  </Button>
                </Card>
              </Col>
            </Row>
          </div>
          <br/>
          <br/>
         { /*<div className="text-left">
              <Button
                className ="btn-white btn-icon mr-6"
                color = 'danger' 
                to ="/admin/insertarBovino" tag={Link}
              >
                 <i className="ni ni-fat-add" />
                <span className="btn-inner--text" >Añadir Nuevo Bovino</span>
              </Button>           
                    </div>*/}
        </Container>
      </div>
    </>
  );
};

export default Header;