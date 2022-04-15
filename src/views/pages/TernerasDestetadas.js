
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


import TernerasDestetadasHeader from "../../components/Headers/TernerasDestetadas.js";
export default class TernerasDestetadas extends React.Component {


  state = {
    listaTernerasDestetadas: [],
    Ternera: {
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
    this.listarTernerasDestetadas();
    localStorage.setItem("edit", "");
  }
  
  
  listarTernerasDestetadas= () => {
    axios
        .get("http://vache-server.herokuapp.com/bovinos/tipo/7")
        .then(response => {
            console.log(response)
            this.setState({
              listaTernerasDestetadas: response.data.info
            });
            console.log("Registro bovinos")
            console.log(this.state.control);
        })
        .catch(error => {
            console.log(error);
        });
  }
  
  eliminarTernerasDestetadas= async (chapeta) => {
  const res = await axios.delete('http://vache-server.herokuapp.com/bovinos/' + chapeta);
  console.log(res);
  this.listarTernerasDestetadas();
  };
  
  cargarInformacion = (Ternera) => {
    console.log("ESTE ES"+Ternera);
     localStorage.setItem("id_Tbovinos",Ternera.id_Tbovinos);
     localStorage.setItem("chapeta",Ternera.chapeta);
     localStorage.setItem("id_tipo",Ternera.id_tipo);
     localStorage.setItem("nombre",Ternera.nombre);
     localStorage.setItem("id_raza",Ternera.id_raza);
     localStorage.setItem("genetica",Ternera.genetica);
     localStorage.setItem("finca",Ternera.finca);
     localStorage.setItem("edit","si");
  }
  
  render() {
    var raza = "";
    return (
      <>
        <TernerasDestetadasHeader />
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
                  {this.state.listaTernerasDestetadas.map((Ternera, i) => {
                    if (Ternera.id_raza == 1)
                    raza = "Jersey"
                    else if (Ternera.id_raza == 2)
                    raza = "Holstein"
                    else if (Ternera.id_raza == 3)
                    raza = "Jerhol"
                    else if (Ternera.id_raza == 4)
                    raza = "PardoSuiza"
            return (
              <tr>
                <td>{Ternera.chapeta}</td>
                <td>Ternera Destetada</td>
                <td>{Ternera.nombre}</td>
                <td>{raza}</td>
                <td>{Ternera.finca}</td>
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
                              key={i} onClick={this.cargarInformacion.bind(this,Ternera)} 
                            >
                               <i className="ni ni-ui-04" />
                              Actualizar
                            </DropdownItem>
                            <DropdownItem
                              onClick={() => this.eliminarTernerasDestetadas(Ternera.chapeta)}
                            >
                                   <i className="ni ni-fat-remove" />
                             Eliminar
                            </DropdownItem>
                            <DropdownItem
                            href="/admin/verGenealogia/"
                            key={i} onClick={this.cargarInformacion.bind(this, Ternera)}
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
