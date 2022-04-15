
import React from "react";
import axios from "axios";

import {
  Card,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Table,
  Container,
  Row,
  Button,
} from "reactstrap";


import TorosHeader from "../../components/Headers/Toros.js";
export default class Toros extends React.Component {


  state = {
    listaToros: [],
    Toro: {
      id_Tbovinos: "",
      chapeta: "",
      id_tipo: "",
      nombre: "",
      id_raza: "",
      genetica: "",
      finca: ""
    }
  }
  
  componentDidMount() {
    this.listarToros();
    localStorage.setItem("edit", "");
  }
  
  
  listarToros= () => {
    axios
        .get("http://vache-server.herokuapp.com/bovinos/tipo/2")
        .then(response => {
            console.log(response)
            this.setState({
              listaToros: response.data.info
            });
            console.log("Registro bovinos")
            console.log(this.state.control);
        })
        .catch(error => {
            console.log(error);
        });
  }
  
  eliminarToros= async (chapeta) => {
  const res = await axios.delete('http://vache-server.herokuapp.com/bovinos/' + chapeta);
  console.log(res);
  this.listarToros();
  };
  
  cargarInformacion = (Toro) => {
    console.log("ESTE ES"+Toro);
     localStorage.setItem("id_Tbovinos",Toro.id_Tbovinos);
     localStorage.setItem("chapeta",Toro.chapeta);
     localStorage.setItem("id_tipo",Toro.id_tipo);
     localStorage.setItem("nombre",Toro.nombre);
     localStorage.setItem("id_raza",Toro.id_raza);
     localStorage.setItem("genetica",Toro.genetica);
     localStorage.setItem("finca",Toro.finca);
     localStorage.setItem("edit","si");
  }
  
  render() {
    var raza = "";
    return (
      <>
        <TorosHeader />
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
                  {this.state.listaToros.map((Toro, i) => {
                    if (Toro.id_raza == 1)
                    raza = "Jersey"
                    else if (Toro.id_raza == 2)
                    raza = "Holstein"
                    else if (Toro.id_raza == 3)
                    raza = "Jerhol"
                    else if (Toro.id_raza == 4)
                    raza = "PardoSuizo"
            return (
              <tr>
                <td>{Toro.chapeta}</td>
                <td>Toro</td>
                <td>{Toro.nombre}</td>
                <td>{raza}</td>
                <td>{Toro.finca}</td>
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
                              href="/admin/actualizarBovino/"
                              key={i} onClick={this.cargarInformacion.bind(this,Toro)} 
                            >
                              <i className="ni ni-ui-04" />
                              Actualizar
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={() => this.eliminarToros(Toro.chapeta)}
                            >
                                <i className="ni ni-fat-remove" />
                             Eliminar
                            </DropdownItem>
                            <DropdownItem
                            href="/admin/verGenealogia/"
                            key={i} onClick={this.cargarInformacion.bind(this,Toro)} 
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
  