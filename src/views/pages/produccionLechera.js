
import React from "react";
import moment from 'moment';
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

import Medicine from "../../components/Headers/produccion.js";

export default class produccionLeche extends React.Component {


  state = {
    listaProduccion: [],
    listaLitros:[],
    litros:"",
    id_lecheria: "",
    fecha_inicio: "",
    fecha_fin: "",
    produccion: {
      id_Tproduccion: "",
      lecheria:"",
      nombre:"",
      fecha:"",
      cantidad_dia:"",
      encargado:"",
    },
    notificationModal: false,
  }

  async componentDidMount() {
    this.setState({
      id_lecheria: localStorage.getItem("id_lecheria"),
      fecha_inicio: new Date((localStorage.getItem("fecha_inicio"))).toISOString(),
      fecha_fin: new Date((localStorage.getItem("fecha_fin"))).toISOString()
  });   
  const res = await axios
  .get("http://vache-server.herokuapp.com/produccionLeche/fechas/registros/"+localStorage.getItem("id_lecheria")+"/"+new Date((localStorage.getItem("fecha_inicio"))).toISOString()+"/"+new Date((localStorage.getItem("fecha_fin"))).toISOString())
    this.setState({
      listaProduccion: res.data.info,
      id_Tproduccion: res.data.info[0].id_Tproduccion,
      lecheria: res.data.info[0].lecheria,
      nombre: res.data.info[0].nombre,
      fecha: res.data.info[0].fecha,
      cantidad_dia: res.data.info[0].cantidad_dia,
      encargado: res.data.info[0].encargado
    });
    console.log(res.data.info)

    axios
  .get("http://vache-server.herokuapp.com/produccionLeche/fechas/litros/"+localStorage.getItem("id_lecheria")+"/"+new Date((localStorage.getItem("fecha_inicio"))).toISOString()+"/"+new Date((localStorage.getItem("fecha_fin"))).toISOString())
  .then(response => {
      console.log(response)
      this.setState({
        listaLitros: response.data.info,
        litros: response.data.info[0].litros
      });
      console.log("Registro tipos")
      console.log(this.state.control);
  })
  .catch(error => {
      console.log(error);
  });
  }




  eliminarProducciones = async (id_Tproduccion) => {
    const res = await axios.delete('http://vache-server.herokuapp.com/produccionLeche' + id_Tproduccion);
    console.log(res);
    this.listarProduccion();
  };

  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  cargarInformacion = (produccion) => {
    localStorage.setItem("id_Tproduccion", produccion.id_Tproduccion);
    localStorage.setItem("lecheria", produccion.lecheria);
    localStorage.setItem("nombre", produccion.nombre);
    localStorage.setItem("fecha", produccion.fecha);
    localStorage.setItem("cantidad_dia", produccion.cantidad_dia);
    localStorage.setItem("encargado", produccion.encargado);
  }

  render() {
    var raza = "";
    return (
      <>
        <Medicine />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow">
                <p>    
                  <center>
                  <b className="text-center">
                  Cantidad producida desde {moment(this.state.fecha_inicio).format('YYYY-MM-DD')} hasta: {moment(this.state.fecha_fin).format('YYYY-MM-DD')} = {this.state.litros}
                  </b>  
                  </center>          
                </p>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Lecheria</th>
                      <th scope="col">Nombre Lactante</th>
                      <th scope="col">Fecha Registro Producción</th>
                      <th scope="col">Cantidad Dia</th>
                      <th scope="col">Encargado Lecheria</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.listaProduccion.map((produccion, i) => {
                      return (
                        <tr>
                          <td>{produccion.lecheria}</td>
                          <td>{produccion.nombre}</td>
                          <td>{moment(new Date(produccion.fecha)).format('DD-MM-YYYY')}</td>
                          <td>{produccion.cantidad_dia}</td>
                          <td>{produccion.encargado}</td>
                          <td className="text-right">
                            <UncontrolledDropdown>
                              <DropdownToggle
                                className="btn-icon-only text-light"
                                href=""
                                role="button"
                                size="sm"
                                color=""
                                key={i} onClick={this.cargarInformacion.bind(this, produccion)}

                              >
                                <i className="fas fa-ellipsis-v" />
                              </DropdownToggle>
                              <DropdownMenu className="dropdown-menu-arrow" right>

                                <DropdownItem
                                  href="/admin/actualizarBovino/"
                                  key={i} onClick={this.cargarInformacion.bind(this, produccion)}
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
                                    <Button className="btn-white"  href="/admin/Novillonas/" color="default" type="button" onClick={() => this.eliminarProducciones(localStorage.getItem("chapeta"))}>
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
