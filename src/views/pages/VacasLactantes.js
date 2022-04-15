
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
} from "reactstrap";


import Lactantes from "../../components/Headers/Lactantes.js";
export default class VacasLactantes extends React.Component {


  state = {
    listaVacasLactantes: [],
    VacaLactante: {
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
    this.listarVacasLactantes();
    localStorage.setItem("edit", "");
  }
  
  
  listarVacasLactantes= () => {
    axios
        .get("http://vache-server.herokuapp.com/bovinos/tipo/8")
        .then(response => {
            console.log(response)
            this.setState({
              listaVacasLactantes: response.data.info
            });
            console.log("Registro bovinos")
            console.log(this.state.control);
        })
        .catch(error => {
            console.log(error);
        });
  }
  
  eliminarVacasLactantes= async (chapeta) => {
  const res = await axios.delete('http://vache-server.herokuapp.com/bovinos/' + chapeta);
  console.log(res);
  this.listarVacasLactantes();
  };
  
  cargarInformacion = (VacaLactante) => {
    console.log("ESTE ES"+VacaLactante);
     localStorage.setItem("id_Tbovinos",VacaLactante.id_Tbovinos);
     localStorage.setItem("chapeta",VacaLactante.chapeta);
     localStorage.setItem("id_tipo",VacaLactante.id_tipo);
     localStorage.setItem("nombre",VacaLactante.nombre);
     localStorage.setItem("id_raza",VacaLactante.id_raza);
     localStorage.setItem("genetica",VacaLactante.genetica);
     localStorage.setItem("finca",VacaLactante.finca);
     localStorage.setItem("edit","si");
  }
  
  render() {
    var raza = "";
    return (
      <>
        <Lactantes />
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
                  {this.state.listaVacasLactantes.map((VacaLactante, i) => {
                    if (VacaLactante.id_raza == 1)
                    raza = "Jersey"
                    else if (VacaLactante.id_raza == 2)
                    raza = "Holstein"
                    else if (VacaLactante.id_raza == 3)
                    raza = "Jerhol"
                    else if (VacaLactante.id_raza == 4)
                    raza = "PardoSuiza"
            return (
              <tr>
                <td>{VacaLactante.chapeta}</td>
                <td>Vaca Lactante</td>
                <td>{VacaLactante.nombre}</td>
                <td>{raza}</td>
                <td>{VacaLactante.finca}</td>
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
                              key={i} onClick={this.cargarInformacion.bind(this,VacaLactante)} 
                            >
                              <i className="ni ni-ui-04" />
                              Actualizar
                            </DropdownItem>
                            <DropdownItem
                              onClick={() => this.eliminarVacasLactantes(VacaLactante.chapeta)}
                            >
                              <i className="ni ni-fat-remove" />
                             Eliminar
                            </DropdownItem>
                            <DropdownItem
                            href="/admin/verGenealogia/"
                            key={i} onClick={this.cargarInformacion.bind(this, VacaLactante)}
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
  