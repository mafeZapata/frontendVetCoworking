
import React from "react";
import axios from "axios";

import {
  Button,
  Card,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Table,
  Container,
  Row,
  Modal,
} from "reactstrap";



import NovillonasH from "../../components/Headers/NovillonasH.js";
export default class Novillonas extends React.Component {


  state = {
    listaNovillonas: [],
    Novillona: {
      id_Tbovinos: "",
      chapeta: "",
      id_tipo: "",
      nombre: "",
      id_raza: "",
      genetica: "",
      finca: "",
    },
    notificationModal: false,
  }

  componentDidMount() {
    this.listarNovillonas();
    localStorage.setItem("edit", "");
  }


  listarNovillonas = () => {
    axios
      .get("http://vache-server.herokuapp.com/bovinos/tipo/3")
      .then(response => {
        console.log(response)
        this.setState({
          listaNovillonas: response.data.info
        });
        console.log("Registro bovinos")
        console.log(this.state.control);
      })
      .catch(error => {
        console.log(error);
      });
  }

  eliminarNovillonas = async (chapeta) => {
    const res = await axios.delete('http://vache-server.herokuapp.com/bovinos/' + chapeta);
    console.log(res);
    this.listarNovillonas();
  };

  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  cargarInformacion = (Novillona) => {
    console.log("ESTE ES" + Novillona);
    localStorage.setItem("id_Tbovinos", Novillona.id_Tbovinos);
    localStorage.setItem("chapeta", Novillona.chapeta);
    localStorage.setItem("id_tipo", Novillona.id_tipo);
    localStorage.setItem("nombre", Novillona.nombre);
    localStorage.setItem("id_raza", Novillona.id_raza);
    localStorage.setItem("genetica", Novillona.genetica);
    localStorage.setItem("finca", Novillona.finca);
    localStorage.setItem("edit", "si");
  }

  render() {
    var raza = "";
    return (
      <>
        <NovillonasH />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow">
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Chapeta</th>
                      <th scope="col">Tipo</th>
                      <th scope="col">Bovino</th>
                      <th scope="col">Raza</th>
                      <th scope="col">Finca</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.listaNovillonas.map((Novillona, i) => {
                      if (Novillona.id_raza == 1)
                        raza = "Jersey"
                      else if (Novillona.id_raza == 2)
                        raza = "Holstein"
                      else if (Novillona.id_raza == 3)
                        raza = "Jerhol"
                      else if (Novillona.id_raza == 4)
                        raza = "PardoSuiza"
                      return (
                        <tr>
                          <td>{Novillona.chapeta}</td>
                          <td>Novillona</td>
                          <td>{Novillona.nombre}</td>
                          <td>{raza}</td>
                          <td>{Novillona.finca}</td>
                          <td className="text-right">
                            <UncontrolledDropdown>
                              <DropdownToggle
                                className="btn-icon-only text-light"
                                href="#pablo"
                                role="button"
                                size="sm"
                                color=""
                                key={i} onClick={this.cargarInformacion.bind(this, Novillona)}

                              >
                                <i className="fas fa-ellipsis-v" />
                              </DropdownToggle>
                              <DropdownMenu className="dropdown-menu-arrow" right>

                                <DropdownItem
                                  href="/admin/actualizarBovino/"
                                  key={i} onClick={this.cargarInformacion.bind(this, Novillona)}
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
                                      <h2 className="heading mt-4">Cuidado!</h2>
                                      <p>
                                        Estas a punto de eliminar un bovino de tu inventario 
                                 </p>
                                    </div>
                                  </div>
                                  <div className="modal-footer">
                                    <Button className="btn-white"  href="/admin/Novillonas/" color="default" type="button" onClick={() => this.eliminarNovillonas(localStorage.getItem("chapeta"))}>
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
                                <DropdownItem
                                  href="/admin/verGenealogia/"
                                  key={i} onClick={this.cargarInformacion.bind(this, Novillona)}
                                >
                                  <i className="ni ni-map-big" />
                             Ver Genealogia
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
