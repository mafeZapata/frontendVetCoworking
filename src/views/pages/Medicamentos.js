
import React from "react";
import axios from "axios";
import moment from 'moment';
import { Link } from "react-router-dom";

import {
  Button,
  Card,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Table,
  Container,
  Row
} from "reactstrap";


import Medicine from "../../components/Headers/Medicine.js";


export default class Medicamentos extends React.Component {

  state = {
    listaMedicamentos: [],
    Medicamento: {
      codigo: "",
      nombre: "",
      descripcion: "",
      horas_retiro_leche: "",
      fecha_compra: "",
      fecha_vencimiento: "",
      disponibilidad: ""
    }
  }

  componentDidMount() {
    this.listarMedicamentos();
    localStorage.setItem("edit", "");
  }

  listarMedicamentos = () => {
    axios
      .get("http://vache-server.herokuapp.com/medicamentos")
      .then(response => {
        console.log(response)
        this.setState({
          listaMedicamentos: response.data.info
        });
        console.log("Medicamentos")
        console.log(this.state.control);
      })
      .catch(error => {
        console.log(error);
      });
  }

  eliminarMedicamentos = async (codigo) => {
    const res = await axios.delete('http://vache-server.herokuapp.com/medicamentos/' + codigo);
    console.log(res);
    this.listarMedicamentos();
  };

  cargarInformacion = (Medicamento) => {
    console.log("ESTE ES"+Medicamento);
     localStorage.setItem("codigo",Medicamento.codigo);
     localStorage.setItem("nombre",Medicamento.nombre);
     localStorage.setItem("descripcion",Medicamento.descripcion);
     localStorage.setItem("horas_retiro_leche",Medicamento.horas_retiro_leche);
     localStorage.setItem("fecha_compra",Medicamento.fecha_compra);
     localStorage.setItem("fecha_vencimiento",Medicamento.fecha_vencimiento);
     localStorage.setItem("disponibilidad",Medicamento.disponibilidad);
     localStorage.setItem("edit","si");
  }


  render() {
    return (
      <>
        <Medicine />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="bg-transparent pb-5">
                  <div className="text-right">
                    <Button
                      className="btn-warning btn-icon mr-4"
                      to="/admin/insertarMedicamentos" tag={Link}
                    >
                      <i className="ni ni-fat-add" />
                      <span className="btn-inner--text">Añadir</span>
                    </Button>
                  </div>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Código</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Horas Retiro Leche</th>
                      <th scope="col">Fecha Compra</th>
                      <th scope="col">Fecha Vencimiento</th>
                      <th scope="col">Disponibilidad</th>
                      <th scope="col">Acciones</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.listaMedicamentos.map((Medicamento, i) => {
                      return (
                        <tr>
                          <td>{Medicamento.codigo}</td>
                          <td>{Medicamento.nombre}</td>
                          <td>{Medicamento.horas_retiro_leche}</td>
                          <td>{moment(new Date(Medicamento.fecha_compra)).format('DD-MM-YYYY')}</td>
                          <td>{moment(new Date(Medicamento.fecha_vencimiento)).format('DD-MM-YYYY')}</td>
                          <td>{Medicamento.disponibilidad}</td>
                          <td className="text-right">
                            <UncontrolledDropdown>
                              <DropdownToggle
                                className="btn-icon-only text-light"
                                href="#pablo"
                                role="button"
                                size="sm"
                                color=""
                                onClick={(e) => e.preventDefault()}
                              >
                                <i className="fas fa-ellipsis-v" />
                              </DropdownToggle>
                              <DropdownMenu className="dropdown-menu-arrow" right>

                                <DropdownItem
                                  href="/admin/actualizarMedicamento/"
                                  key={i} onClick={this.cargarInformacion.bind(this,Medicamento)} 
                                >
                                  <i className="ni ni-ui-04" />
                              Actualizar
                            </DropdownItem>
                                <DropdownItem
                                  onClick={() => this.eliminarMedicamentos(Medicamento.codigo)}
                                >
                                  <i className="ni ni-fat-remove" />
                             Eliminar
                            </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
        <br></br>
      </>
    );
  }

};


