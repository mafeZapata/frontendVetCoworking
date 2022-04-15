
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


import Medicine from "../../components/Headers/controlCelo.js";

export default class controlCelos extends React.Component {

  state = {
    listaControlCelo: [],
    celo: {
      id_celo: "",
      fecha_inicio: "",
      detalles: "",
      Nombre_Macho: "",
      Nombre_Hembra: "",
      nombre: "",
      id_macho:"",
      id_usuario:"",
      id_hembra:"",
      fecha_posible_parto: "",
    },
    notificationModal: false,
  }

  componentDidMount() {
    this.listarControlesCelos();
    localStorage.setItem("edit", "");
  }


  listarControlesCelos = () => {
    axios
      .get("http://vache-server.herokuapp.com/celo")
      .then(response => {
        console.log(response)
        this.setState({
          listaControlCelo: response.data.info
        });
        console.log("Registro Control de Celo")
        console.log(this.state.control);
      })
      .catch(error => {
        console.log(error);
      });
  }

  eliminarControlCelo = async (id_celo) => {
    const res = await axios.delete('http://vache-server.herokuapp.com/celo/' + id_celo);
    console.log(res);
    this.listarControlesCelos();
  };

  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  cargarInformacion = (celo) => {
    console.log("ESTE ES" + celo);
    localStorage.setItem("id_celo", celo.id_celo);
    localStorage.setItem("fecha_inicio", celo.fecha_inicio);
    localStorage.setItem("detalles", celo.detalles);
    localStorage.setItem("Nombre_Macho", celo.Nombre_Macho);
    localStorage.setItem("Nombre_Hembra", celo.Nombre_Hembra);
    localStorage.setItem("nombre", celo.nombre);
    localStorage.setItem("fecha_posible_parto", celo.fecha_posible_parto);
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
                className="btn-danger btn-icon mr-4"
                to="/admin/insertarControlesCelo" tag={Link}
              >
                 <i className="ni ni-fat-add" />
                <span className="btn-inner--text">Añadir</span>
              </Button>           
            </div>
          </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Hembra en Celo</th>
                    <th scope="col">Nombre Toro</th>
                    <th scope="col">Detalles</th>
                    <th scope="col">Fecha Inicio</th>
                    <th scope="col">Fecha Posible Parto</th>
                    <th scope="col">Encargado</th>
                    <th scope="col">Acciones</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                {this.state.listaControlCelo.map((celo, i) => {
                      return (
                        <tr>
                          <td>{celo.Nombre_Hembra}</td>
                          <td>{celo.Nombre_Macho}</td>
                          <td>{celo.detalles}</td>
                          <td>{moment(new Date(celo.fecha_inicio)).format('DD-MM-YYYY')}</td>
                          <td>{moment(new Date(celo.fecha_posible_parto)).format('DD-MM-YYYY')}</td>
                          <td>{celo.nombre}</td>
                          <td className="text-right">
                            <UncontrolledDropdown>
                              <DropdownToggle
                                className="btn-icon-only text-light"
                                role="button"
                                size="sm"
                                color=""
                                key={i} onClick={this.cargarInformacion.bind(this, celo)}
                              >
                                <i className="fas fa-ellipsis-v" />
                              </DropdownToggle>
                              <DropdownMenu className="dropdown-menu-arrow" right>

                                <DropdownItem
                                  href="/admin/actualizarcontrolCelo/"
                                  key={i} onClick={this.cargarInformacion.bind(this, celo)}
                                >
                                  <i className="ni ni-ui-04" />
                            Actualizar
                          </DropdownItem>
                                <Modal
                                  className="modal-dialog-centered modal-warning"
                                  contentClassName="bg-gradient-warning"
                                  isOpen={this.state.notificationModal}
                                >
                                  <div className="modal-header">
                                    <button
                                      aria-label="Close"
                                      className="close"
                                      data-dismiss="modal"
                                      type="button"
                                      onClick={() => this.toggleModal("notificationModal")}
                                    >
                                      <span aria-hidden={true}>X</span>
                                    </button>
                                  </div>
                                  <div className="modal-body">
                                    <div className="py-3 text-center">
                                      <i className="ni ni-bell-55 ni-3x" />
                                      <h2 className="heading mt-4">¡Cuidado!</h2>
                                      <p>
                                        Estas a punto de eliminar un control de celo
                                 </p>
                                    </div>
                                  </div>
                                  <div className="modal-footer">
                                    <Button className="btn-white"  href="/admin/controlCelo/" color="default" type="button" onClick={() => this.eliminarControlCelo(localStorage.getItem("id_celo"))}>
                                    Eliminar
                                    </Button>
                                    <Button
                                      className="text-white ml-auto"
                                      color="link"
                                      data-dismiss="modal"
                                      type="button"
                                      onClick={() => this.toggleModal("notificationModal")}
                                    >
                                      Cerrar
                               </Button>
                                  </div>
                                </Modal>
                                <DropdownItem
                                  onClick={() => this.toggleModal("notificationModal")}
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
    </>
  );
};

}

