
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


import Orras from "../../components/Headers/vacasOrrasH.js";
export default class VacasOrras extends React.Component {


  state = {
    listaVacasOrras: [],
    VacaOrra: {
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
    this.listarVacasOrras();
    localStorage.setItem("edit", "");
  }
  
  
  listarVacasOrras= () => {
    axios
        .get("http://vache-server.herokuapp.com/bovinos/tipo/9")
        .then(response => {
            console.log(response)
            this.setState({
              listaVacasOrras: response.data.info
            });
            console.log("Registro bovinos")
            console.log(this.state.control);
        })
        .catch(error => {
            console.log(error);
        });
  }
  
  eliminarVacasOrras= async (chapeta) => {
  const res = await axios.delete('http://vache-server.herokuapp.com/bovinos/' + chapeta);
  console.log(res);
  this.listarVacasOrras();
  };
  
  cargarInformacion = (VacaOrra) => {
    console.log("ESTE ES"+VacaOrra);
     localStorage.setItem("id_Tbovinos",VacaOrra.id_Tbovinos);
     localStorage.setItem("chapeta",VacaOrra.chapeta);
     localStorage.setItem("id_tipo",VacaOrra.id_tipo);
     localStorage.setItem("nombre",VacaOrra.nombre);
     localStorage.setItem("id_raza",VacaOrra.id_raza);
     localStorage.setItem("genetica",VacaOrra.genetica);
     localStorage.setItem("finca",VacaOrra.finca);
     localStorage.setItem("edit","si");
  }
  
  render() {
    var raza = "";
    return (
      <>
        <Orras />
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
                  {this.state.listaVacasOrras.map((VacaOrra, i) => {
                    if (VacaOrra.id_raza == 1)
                    raza = "Jersey"
                    else if (VacaOrra.id_raza == 2)
                    raza = "Holstein"
                    else if (VacaOrra.id_raza == 3)
                    raza = "Jerhol"
                    else if (VacaOrra.id_raza == 4)
                    raza = "PardoSuiza"
            return (
              <tr>
                <td>{VacaOrra.chapeta}</td>
                <td>Vaca Orra</td>
                <td>{VacaOrra.nombre}</td>
                <td>{raza}</td>
                <td>{VacaOrra.finca}</td>
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
                              key={i} onClick={this.cargarInformacion.bind(this,VacaOrra)} 
                            >
                              <i className="ni ni-ui-04" />
                              Actualizar
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={() => this.eliminarVacasOrras(VacaOrra.chapeta)}
                            >
                                <i className="ni ni-fat-remove" />
                             Eliminar
                            </DropdownItem>
                            <DropdownItem
                            href="/admin/verGenealogia/"
                            key={i} onClick={this.cargarInformacion.bind(this,VacaOrra)} 
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
  