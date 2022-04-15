import React from "react";
import axios from 'axios';

import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
// core components
import UserHeader from "../../components/Headers/genealogico.js";

export default class genealogicos extends React.Component {

  state = {
    listaGenealogicos: [],
    Genealogicos: {
      id_tbovino: "",
      Bovino: "",
      Mamá: "",
      Papá: "",
      Abuelo: "",
      Abuela: ""
    }
  }

  async componentDidMount() {
    try {
    this.state.id_tbovino = localStorage.getItem("chapeta")
    console.log(this.state.id_tbovino);
    const res = await axios.get('http://vache-server.herokuapp.com/genealogicos/' + this.state.id_tbovino);
    this.setState({
      Bovino: res.data.info[0].Bovino,
      Mamá: res.data.info[0].Mamá,
      Papá: res.data.info[0].Papá,
      Abuela: res.data.info[0].Abuela,
      Abuelo: res.data.info[0].Abuelo,
    })}catch{
      this.setState({
        Bovino: localStorage.getItem("nombre"),
        Mamá: "Sin información",
        Papá: "Sin información",
        Abuela: "Sin información",
        Abuelo: "Sin información",
      })
    };


  }



  render() {
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--8" fluid>
          <Row>
            <Col className="order-xl-6 mb-8 mb-xl-0 center" xl="8" >
              <Card className="card-profile shadow center">
                <CardBody className="pt-0 pt-md-4">
                 
                      <div className="text-center">
                        <h3>
                          Bovino
                          <span className="font-weight-light"></span>
                        </h3>
                        <div className="h5 font-weight-300">
                          <i className="ni location_pin mr-2" />
                          {this.state.Bovino}
                        </div>
                        <br></br>
                        <h3>
                          Mamá
                          <span className="font-weight-light"></span>
                        </h3>
                        <div className="h5 font-weight-300">
                          <i className="ni location_pin mr-2" />
                          {this.state.Mamá}
                        </div>
                        <br></br>
                        <h3>
                          Papá
                          <span className="font-weight-light"></span>
                        </h3>
                        <div className="h5 font-weight-300">
                          <i className="ni location_pin mr-2" />
                          {this.state.Papá}
                        </div>
                        <br></br>
                        <h3>
                          Abuelo
                          <span className="font-weight-light"></span>
                        </h3>
                        <div className="h5 font-weight-300">
                          <i className="ni location_pin mr-2" />
                         
                          {this.state.Abuelo}
                         
                          
                        </div>
                        <br></br>
                        <h3>
                          Abuela
                          <span className="font-weight-light"></span>
                        </h3>
                        <div className="h5 font-weight-300">
                          <i className="ni location_pin mr-2" />
                          {this.state.Abuela}
                        </div>
                      </div>
                  
                  <br></br>
                  <div className="text-center">
                    <span> En caso de que el bovino no tenga información sobre su genealogía ¿Desea ingresarla?</span>
                    <br></br>
                    <Button
                      className="btn-neutral btn-icon mr-2"
                      color="info"
                      href="/admin/insertarGenealogia"
                    >
                      <i className="ni ni-fat-add" />

                      <span className="btn-inner--text">Agregar Genealogía</span>
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>

          </Row>
        </Container>
      </>
    );
  }

};


