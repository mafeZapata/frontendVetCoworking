import React from "react";
import { Link } from 'react-router-dom'
import imagenes from './imagenes'


import * as SimpleIcons from 'react-icons/si'

import { Button, Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";



const Header = () => {
  return (
    <>
      <div className="header bg-gradient-success pb-9 pt-5 pt-md-8">
        <Container fluid>
        <Col lg="7" md="10">
              <h1 className="display-2 text-white">Inventario de Bovinos</h1>
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
                            Terneras de Levante
                        </CardTitle>
                        <img src={imagenes.ternera} alt="ternera" style = {{ height:50, width: 50,}}/>
                        { /* </div>
                       <Col className="col-auto">
                          <div className="icon icon-shape bg-success text-white rounded-circle shadow">
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
                          Terneras Destetadas
                        </CardTitle>
                        <img src={imagenes.ternera} alt="ternera" style = {{ height:50, width: 50,}}/>
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
                          Novillonas
                        </CardTitle>
                        <img src={imagenes.novillona} alt="ternera" style = {{ height:50, width: 50,}}/>
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
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                <Button>
                    <Link to={'/admin/vacaslactantes'}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Vacas Lactantes
                        </CardTitle>
                        <img src={imagenes.vaca} alt="ternera" style = {{ height:50, width: 50,}}/>
                      {/*
                      </div>
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
            </Row>
            <br />
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                <Button>
                    <Link to={'/admin/vacasorras'}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Vacas Horras
                        </CardTitle>
                        <img src={imagenes.vaca} alt="ternera" style = {{ height:50, width: 50,}}/>
                      {/*
                      </div>
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
                    <Link to={'/admin/terneros'}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Terneros
                        </CardTitle>
                        <img src={imagenes.ternero} alt="ternero" style = {{ height:50, width: 50,}}/>
                      {/*
                      </div>
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
                    <Link to={'/admin/toros'}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Toros
                        </CardTitle>
                        <img src={imagenes.toro} alt="toro" style = {{ height:50, width: 50,}}/>
                      {/*
                      </div>
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
                    <Link to={'/admin/termos'}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Termos
                        </CardTitle>
                        <img src={imagenes.termo} alt="termo" style = {{ height:50, width: 50,}}/>
                      {/*
                      </div>
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
            </Row>
          </div>
          <br/>
          <br/>
          <div className="text-left">
              <Button
                className="btn-neutral btn-icon mr-6"
                color="info"
                to="/admin/insertarBovino" tag={Link}
              >
                 <i className="ni ni-fat-add" />
                <span className="btn-inner--text">Añadir Nuevo Bovino</span>
              </Button>           
            </div>
        </Container>
      </div>
    </>
  );
};

export default Header;