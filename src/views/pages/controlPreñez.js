
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
  Media,
  Modal,
  Table,
  Container,
  Row,
} from "reactstrap";


import Medicine from "../../components/Headers/controlPrenez.js";

export default class controlPreñez extends React.Component {

  state = {
    listaControlPrenez: [],
    controlPrenez: {
      id_control:"",
      vaca:"",
      fecha_palpacion:"",
      confirmacion_palpacion:"",
      num_parto:"",
      fecha_secado:"",
      usuario:"",
      id_celo:"",
    },
    notificationModal: false,
  }

  componentDidMount() {
    this.listarControlesPrenez();
    localStorage.setItem("edit", "");
  }


  listarControlesPrenez = () => {
    axios
      .get("http://vache-server.herokuapp.com/controlPrenez")
      .then(response => {
        console.log(response)
        this.setState({
          listaControlPrenez: response.data.info
        });
        console.log("Registro Control de Celo")
        console.log(this.state.control);
      })
      .catch(error => {
        console.log(error);
      });
  }

  eliminarControlPrenez = async (id_control) => {
    const res = await axios.delete('http://vache-server.herokuapp.com/controlPrenez' + id_control);
    console.log(res);
    this.listarControlesPrenez();
  };

  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  cargarInformacion = (controlPrenez) => {
    localStorage.setItem("id_control", controlPrenez.id_control);
    localStorage.setItem("vaca", controlPrenez.vaca);
    localStorage.setItem("fecha_palpacion", controlPrenez.fecha_palpacion);
    localStorage.setItem("confirmacion_palpacion", controlPrenez.confirmacion_palpacion);
    localStorage.setItem("num_parto", controlPrenez.num_parto);
    localStorage.setItem("id_usuario", controlPrenez.id_usuario);
    localStorage.setItem("usuario", controlPrenez.usuario);

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
                className="btn-info btn-icon mr-4"
                to="/admin/insertarControlesPrenez" tag={Link}
              >
                 <i className="ni ni-fat-add" />
                <span className="btn-inner--text">Añadir</span>
              </Button>           
            </div>
          </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Nombre Vaca</th>
                    <th scope="col">Fecha Palpación</th>
                    <th scope="col">Confirmacion Palpación</th>
                    <th scope="col">Fecha Secado</th>
                    <th scope="col">Número de Partos</th>
                    <th scope="col">Encargado</th>
                    <th scope="col">Acciones</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                {this.state.listaControlPrenez.map((controlPrenez, i) => {
                      return (
                        <tr>
                          <td>{controlPrenez.vaca}</td>
                          <td>{moment(new Date(controlPrenez.fecha_palpacion)).format('DD-MM-YYYY')}</td>
                          <td>{controlPrenez.confirmacion_palpacion ? "confirmado" : "No esta en preñez"}</td>
                          <td>{moment(new Date(controlPrenez.fecha_secado)).format('DD-MM-YYYY')}</td>
                          <td>{controlPrenez.num_parto}</td>
                          <td>{controlPrenez.usuario}</td>
                          <td className="text-right">
                            <UncontrolledDropdown>
                              <DropdownToggle
                                className="btn-icon-only text-light"
                                role="button"
                                size="sm"
                                color=""
                                key={i} onClick={this.cargarInformacion.bind(this, controlPrenez)}
                              >
                                <i className="fas fa-ellipsis-v" />
                              </DropdownToggle>
                              <DropdownMenu className="dropdown-menu-arrow" right>

                                <DropdownItem
                                  href="/admin/actualizarcontrolPreñez/"
                                  key={i} onClick={this.cargarInformacion.bind(this, controlPrenez)}
                                >
                                  <i className="ni ni-ui-04" />
                            Actualizar
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
    </>
  );
};

}

