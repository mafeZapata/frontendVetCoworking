import React from "react";
import axios from 'axios';
import moment from 'moment';
import ReactDatetime from "react-datetime";
import { Link } from "react-router-dom";

import {
  FormGroup,
  Form,
  Input,
  Row,
  Card,
  Button,
  Container,
  Col,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  CardBody,
} from "reactstrap";

import UserHeader from "../../components/Headers/produccion.js";

class Lecherias extends React.Component {
constructor() {
  super();
  this.state = {
  listafechas: [],
  listalecherias: [],
  litros: [],
  id_lecheria: "",
  fecha_inicio: "",
  fecha_fin: "",
  };
  this.onInputChange = this.onInputChange.bind(this);
}


  async componentDidMount() {

    axios
      .get("http://vache-server.herokuapp.com/lecherias")
      .then(response => {
        console.log(response)
        this.setState({
          listalecherias: response.data.info
        });
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("http://vache-server.herokuapp.com/produccionLeche/fechas/registros",
        { id_lecheria: this.state.id_lecheria, fecha_inicio: this.state.fecha_inicio, fecha_fin: this.state.fecha_fin })
      .then(response => {
        console.log(response)
        this.setState({
          listafechas: response.data.info
        });
        console.log("Registro por Fechas")
        console.log(this.state.control);
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("http://vache-server.herokuapp.com/produccionLeche/fechas/litros")
      .then(response => {
        console.log(response)
        this.setState({
          litros: response.data.info
        });
        console.log("Litros producidos")
        console.log(this.state.control);
      })
      .catch(error => {
        console.log(error);
      });
  }

  cargarInformacion() {
    localStorage.setItem("id_lecheria", this.state.id_lecheria);
    localStorage.setItem("fecha_inicio", this.state.fecha_inicio.toString());
    localStorage.setItem("fecha_fin", this.state.fecha_fin.toString());
  }


  onInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
        [name]: value
    })
};
  render() {
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--8" fluid>
          <Row>
            <Col className="order-xl-6 mb-8 mb-xl-0 center" xl="8" >
              <Card className="card-profile shadow center">
                <CardBody className="pt-0 pt-md-4">

                  <Form onSubmit={this.onSubmit} className="text-center">
                    <span> Ingrese ... </span>
                    <br></br>
                    <br></br>
                    <Row>
                      <Col md="5">
                        <span> Elija la Lecheria </span>
                        <FormGroup>
                          <Input
                            className="form-control-alternative"
                            id="exampleFormControlInput1"
                            type="select"
                            name="id_lecheria"
                            value={this.state.id_lecheria}
                            onChange={this.onInputChange}
                            required
                          >
                            <option value={"Seleccione número de la lecheria"} >Seleccione número de la lecheria</option>
                            {this.state.listalecherias.map(lecherias => (

                              <option key={lecherias.id_lecheria} value={lecherias.id_lecheria} onChange={this.onInputChange}>{lecherias.id_lecheria}</option>
                            )
                            )}
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="5">
                        <span> Fecha Inicio</span>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-calendar-grid-58" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <ReactDatetime
                              inputProps={{
                                placeholder: "Fecha Inicio"
                              }}
                              dateFormat={'YYYY-MM-DD'}
                              timeFormat={false}
                              value={new Date(this.state.fecha_inicio)}
                              onChange={e => this.setState({ fecha_inicio: e })}
                              name="fecha_inicio"
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col md="5">
                        <span> Fecha Final </span>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-calendar-grid-58" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <ReactDatetime
                              inputProps={{
                                placeholder: "Fecha Fin"
                              }}
                              dateFormat={'YYYY-MM-DD'}
                              timeFormat={false}
                              value={new Date(this.state.fecha_fin)}
                              onChange={e => this.setState({ fecha_fin: e })}
                              name="fecha_fin"
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>         
                    <div className="text-center">
                      <Button
                        className="btn-neutral btn-icon mr-2"
                        color="info"
                        href="/admin/produccionLechera"
                        onClick={this.cargarInformacion()}
                      >
                        <i className="ni ni-active-40" />
                        <span className="btn-inner--text">Consultar</span>
                      </Button>
                    </div>     
                  </Form>
                  
                </CardBody>
              </Card>
            </Col>

          </Row>
        </Container>
      </>
    );
  }

};

export default Lecherias;
