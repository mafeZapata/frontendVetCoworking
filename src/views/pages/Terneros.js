
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


import TernerosHeader from "../../components/Headers/Terneros.js";
export default class Terneros extends React.Component {


  state = {
    listaTerneros: [],
    Ternero: {
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
    this.listarTerneros();
    localStorage.setItem("edit", "");
  }
  
  
  listarTerneros= () => {
    axios
        .get("http://vache-server.herokuapp.com/bovinos/tipo/5")
        .then(response => {
            console.log(response)
            this.setState({
              listaTerneros: response.data.info
            });
            console.log("Registro bovinos")
            console.log(this.state.control);
        })
        .catch(error => {
            console.log(error);
        });
  }
  
  eliminarTerneros= async (chapeta) => {
  const res = await axios.delete('http://vache-server.herokuapp.com/bovinos/' + chapeta);
  console.log(res);
  this.listarTerneros();
  };
  
  cargarInformacion = (Ternero) => {
    console.log("ESTE ES"+Ternero);
     localStorage.setItem("id_Tbovinos",Ternero.id_Tbovinos);
     localStorage.setItem("chapeta",Ternero.chapeta);
     localStorage.setItem("id_tipo",Ternero.id_tipo);
     localStorage.setItem("nombre",Ternero.nombre);
     localStorage.setItem("id_raza",Ternero.id_raza);
     localStorage.setItem("genetica",Ternero.genetica);
     localStorage.setItem("finca",Ternero.finca);
     localStorage.setItem("edit","si");
  }
  
  render() {
    var raza = "";
    return (
      <>
        <TernerosHeader />
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
                  {this.state.listaTerneros.map((Ternero, i) => {
                    if (Ternero.id_raza == 1)
                    raza = "Jersey"
                    else if (Ternero.id_raza == 2)
                    raza = "Holstein"
                    else if (Ternero.id_raza == 3)
                    raza = "Jerhol"
                    else if (Ternero.id_raza == 4)
                    raza = "PardoSuizo"
            return (
              <tr>
                <td>{Ternero.chapeta}</td>
                <td>Ternero</td>
                <td>{Ternero.nombre}</td>
                <td>{raza}</td>
                <td>{Ternero.finca}</td>
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
                              key={i} onClick={this.cargarInformacion.bind(this,Ternero)} 
                            >
                              <i className="ni ni-ui-04" />
                              Actualizar
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={() => this.eliminarTerneros(Ternero.chapeta)}
                            >
                               <i className="ni ni-fat-remove" />
                             Eliminar
                            </DropdownItem>
                            <DropdownItem
                            href="/admin/verGenealogia/"
                            key={i} onClick={this.cargarInformacion.bind(this,Ternero)} 
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
  