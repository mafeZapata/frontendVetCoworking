
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


import Medicine from "../../components/Headers/controlPartos";

export default class controlPartos extends React.Component {

  state = {
    listaControlPartos: [],
    controlParto: {
      id_parto:"",
      id_bovino:"",
      Bovino:"",
      fecha_parto :"",
      pesaje:"",
      observaciones:"",
      Tipo_Bovino:"",
      id_Tgenealogico:"",
      id_usuario:"",
      Usuario:""
    },
    notificationModal: false,
  }

  componentDidMount() {
    this.listarControlesParto();
    localStorage.setItem("edit", "");
  }


  listarControlesParto = () => {
    axios
      .get("http://vache-server.herokuapp.com/controlPartos")
      .then(response => {
        console.log(response)
        this.setState({
          listaControlPartos: response.data.info
        });
        console.log("Registro Control de partos")
        console.log(this.state.control);
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  eliminarControlParto = async (id_parto) => {
    const res = await axios.delete('http://vache-server.herokuapp.com/controlPartos/' + id_parto);
    console.log(res);
    this.listarControlesParto();
  };

  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  cargarInformacion = (controlParto) => {
    localStorage.setItem("id_parto", controlParto.id_parto);
    localStorage.setItem("id_bovino", controlParto.id_bovino);
    localStorage.setItem("Bovino", controlParto.Bovino);
    localStorage.setItem("fecha_parto", controlParto.fecha_parto);
    localStorage.setItem("pesaje", controlParto.pesaje);
    localStorage.setItem("observaciones", controlParto.observaciones);
    localStorage.setItem("Tipo_Bovino", controlParto.Tipo_Bovino);
    localStorage.setItem("id_Tgenealogico", controlParto.id_Tgenealogico);
    localStorage.setItem("id_usuario", controlParto.id_usuario);
    localStorage.setItem("Usuario ", controlParto.Usuario );

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
                  to="/admin/insertarControlParto" tag={Link}
                >
                   <i className="ni ni-fat-add" />
                  <span className="btn-inner--text">Añadir</span>
                </Button>           
              </div>
            </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Bovino</th>
                      <th scope="col">Fecha parto</th>
                      <th scope="col">Pesaje</th>
                      <th scope="col">Observaciones</th>
                      <th scope="col">Tipo bovino</th>
                      <th scope="col">Encargado</th>
                      <th scope="col">Acciones</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.listaControlPartos.map((controlParto, i) => {
                        return (
                          <tr>
                            <td>{controlParto.Bovino}</td>  
                            <td>{moment(new Date(controlParto.fecha_parto)).format('DD-MM-YYYY')}</td>
                            <td>{controlParto.pesaje}</td>
                            <td>{controlParto.observaciones}</td>
                            <td>{controlParto.Tipo_Bovino}</td>
                            <td>{controlParto.Usuario}</td>
                            <td className="text-right">
                              <UncontrolledDropdown>
                              <DropdownToggle
                                className="btn-icon-only text-light"
                                role="button"
                                size="sm"
                                color=""
                                key={i} onClick={this.cargarInformacion.bind(this, controlParto)}
                              >
                                <i className="fas fa-ellipsis-v" />
                              </DropdownToggle>
                              <DropdownMenu className="dropdown-menu-arrow" right>

                                <DropdownItem
                                  href="/admin/actualizarControlParto/"
                                  key={i} onClick={this.cargarInformacion.bind(this, controlParto)}
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
                                        Estas a punto de eliminar un control de parto
                                 </p>
                                    </div>
                                  </div>
                                  <div className="modal-footer">
                                    <Button className="btn-white"  href="/admin/controlPartos/" color="default" type="button" onClick={() => this.eliminarControlParto(localStorage.getItem("id_parto"))}>
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