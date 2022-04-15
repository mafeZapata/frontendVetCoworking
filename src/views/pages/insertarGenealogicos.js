import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import {
    FormGroup,
    Form,
    Input,
    Row,
    Card,
    Button,
    Container,
    Col
} from "reactstrap";
import TernerasDestetadasHeader from "../../components/Headers/genealogico.js";


class insertarGenealogicos extends React.Component {

    constructor() {
        super();
        this.state = {
            id_tbovino: "",
            nombre: "",
            id_mama: "",
            id_papa: "",
            mamas: [],
            id_abuelo: "",
            id_abuela: "",
            papas: [],
            abuelos: [],
            abuelas: [],
        };
        this.onInputChange = this.onInputChange.bind(this);
    }


    componentDidMount() {

        this.state.nombre = localStorage.getItem("nombre")
        this.state.id_tbovino = localStorage.getItem("chapeta")
        //lactantes madres
        axios
            .get("http://vache-server.herokuapp.com/bovinos/tipo/8")
            .then(response => {
                console.log(response)
                this.setState({
                    mamas: response.data.info
                });
                console.log("Registro lactantes")
                console.log(this.state.mama);
            })
            .catch(error => {
                console.log(error);
            });
        // toros
        axios
            .get("http://vache-server.herokuapp.com/bovinos/tipo/2")
            .then(response => {
                console.log(response)
                this.setState({
                    papas: response.data.info
                });
                console.log("Registro toros")
                console.log(this.state.control);
            })
            .catch(error => {
                console.log(error);
            });
            // lactantes abuelas
            axios
            .get("http://vache-server.herokuapp.com/bovinos/tipo/8")
            .then(response => {
                console.log(response)
                this.setState({
                    abuelas: response.data.info
                });
                console.log("Registro lactantes")
                console.log(this.state.control);
            })
            .catch(error => {
                console.log(error);
            });
            // lactantes abuelos
            axios
            .get("http://vache-server.herokuapp.com/bovinos/tipo/2")
            .then(response => {
                console.log(response)
                this.setState({
                    abuelos: response.data.info
                });
                console.log("Registro toros")
                console.log(this.state.control);
            })
            .catch(error => {
                console.log(error);
            });
          
    }

    onSubmit = async (e) => {


        e.preventDefault();


        await axios.post('http://vache-server.herokuapp.com/genealogicos', {
            id_tbovino: this.state.id_tbovino,
            id_mama: this.state.id_mama,
            id_papa: this.state.id_papa,
            id_abuela: this.state.id_abuela,
            id_abuelo: this.state.id_abuelo,
        }).then((response) => {
            console.log(response);
            window.location.href = '/admin/Bovinos';
        });


        this.setState({
            id_tbovino: "",
            nombre: "",
            id_mama: "",
            id_papa: "",
            mamas: [],
            id_abuelo: "",
            id_abuela: "",
            papas: [],
            abuelos: [],
            abuelas: [],
        });



    };


    onInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    };




    render() {
        return (
            <>
                <TernerasDestetadasHeader />
                <br />
                <Container className="mt--7" fluid>
                    <Row>
                        <div className="col">
                            <Card className="shadow">                             
                                <br></br>
                                <Form onSubmit={this.onSubmit} className="text-center">
                                    <Row>
                                        <Col md="5">
                                            <FormGroup>
                                                <span> Nombre Bovino </span>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Nombre Bovino"
                                                    type="text"
                                                    value={this.state.nombre}
                                                    name="nombre"
                                                    onChange={this.onInputChange}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="5">
                                            <span> Mamá </span>
                                            <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    type="select"
                                                    name="id_mama"
                                                    onChange={this.onInputChange}
                                                    required
                                                >
                                                    {this.state.mamas.map(mamá => (
                                                        <option key={mamá.chapeta} value={mamá.chapeta} onChange={this.onInputChange}>{mamá.nombre}</option>
                                                    )

                                                    )}
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="5">
                                            <span> Papá</span>
                                            <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    type="select"
                                                    name="id_papa"
                                                    onChange={this.onInputChange}
                                                    required
                                                >
                                                   {this.state.papas.map(papá => (
                                                            <option key={papá.chapeta} value={papá.chapeta} onChange={this.onInputChange}>{papá.nombre}</option>
                                                        )

                                                        )}  
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md="5">
                                            <span> Abuelo </span>
                                            <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    type="select"
                                                    name="id_abuelo"
                                                    onChange={this.onInputChange}
                                                    required
                                                >
                                                  {this.state.abuelos.map(abuelo => (
                                                            <option key={abuelo.chapeta} value={abuelo.chapeta} onChange={this.onInputChange}>{abuelo.nombre}</option>
                                                        )

                                                        )}  
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                    <Col md="5">
                                            <span> Abuela</span>
                                            <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    type="select"
                                                    name="id_abuela"
                                                    onChange={this.onInputChange}
                                                    required
                                                >
                                                    {this.state.abuelas.map(abuela => (
                                                            <option key={abuela.chapeta} value={abuela.chapeta} onChange={this.onInputChange}>{abuela.nombre}</option>
                                                        )

                                                        )}  
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        <Button
                                            type="submit"
                                            className="btn-neutral btn-icon mr-4"
                                            color="default"

                                        >
                                            <i className="ni ni-fat-add" />
                                            <span className="btn-inner--text">Insertar</span>
                                        </Button>
                                    </div>
                                </Form>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </>
        );
    }
}

export default insertarGenealogicos;