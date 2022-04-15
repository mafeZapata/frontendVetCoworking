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
    Col,
    Modal,
} from "reactstrap";
import TernerasDestetadasHeader from "../../components/Headers/insertarBovino.js";


class insertarTerneras extends React.Component {

    constructor() {
        super();
        this.state = {
            id_Tbovinos: "",
            chapeta: "",
            id_tipo: "",
            tipos: [],
            nombre: "",
            id_raza: "",
            razas: [],
            finca: "",
            notificationModal: false,
            errorModal: false,
        };
        this.onInputChange = this.onInputChange.bind(this);
    }



    componentDidMount() {



        axios
            .get("http://vache-server.herokuapp.com/registroTipos/")
            .then(response => {
                console.log(response)
                this.setState({
                    tipos: response.data.info
                });
                console.log("Registro tipos")
                console.log(this.state.control);
            })
            .catch(error => {
                console.log(error);
            });

        axios
            .get("http://vache-server.herokuapp.com/registroRazas/")
            .then(response => {
                console.log(response)
                this.setState({
                    razas: response.data.info
                });
                console.log("Registro razas")
                console.log(this.state.control);
            })
            .catch(error => {
                console.log(error);
            });
    }


    toggleModal = state => {
        this.setState({
            [state]: !this.state[state]
        });
    };

    onSubmit = async (e) => {


        e.preventDefault();


        await axios.post('http://vache-server.herokuapp.com/bovinos', {
            chapeta: this.state.chapeta,
            id_tipo: this.state.id_tipo,
            nombre: this.state.nombre,
            id_raza: this.state.id_raza,
            finca: this.state.finca,
        }).then((response) => {
            console.log(response);
            if (response.status === 200 && response.data.ok === true ) {
                setTimeout(() => {
                    this.setState({ notificationModal: true });
                }, 200)
            }
            else {
                setTimeout(() => {
                    this.setState({ errorModal: true });
                },200)
            }
        });


        this.setState({
            id_Tbovinos: "",
            chapeta: "",
            id_tipo: "",
            tipos: [],
            nombre: "",
            id_raza: "",
            razas: [],
            finca: "",
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
                                                <span> Chapeta </span>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Número Chapeta"
                                                    type="number"
                                                    value={this.state.chapeta}
                                                    name="chapeta"
                                                    onChange={this.onInputChange}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
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
                                    </Row>
                                    <Row>
                                        <Col md="5">
                                            <span> Tipo de Bovino</span>
                                            <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    type="select"
                                                    name="id_tipo"
                                                    onChange={this.onInputChange}
                                                    required
                                                >
                                                    <option value={"Seleccione el tipo del bovino"} onChange={this.onInputChange}>Seleccione el tipo del Bovino</option>
                                                    {this.state.tipos.map(tipo => (
                                                        <option key={tipo.id_tipo} value={tipo.id_tipo} onChange={this.onInputChange}>{tipo.nombre}</option>
                                                    )

                                                    )}
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md="5">
                                            <span> Raza </span>
                                            <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    type="select"
                                                    name="id_raza"
                                                    onChange={this.onInputChange}
                                                    required
                                                >
                                                     <option value={"Seleccione la raza del bovino"} onChange={this.onInputChange}>Seleccione la raza del Bovino</option>
                                                    {this.state.razas.map(raza => (
                                                        
                                                        <option key={raza.id_raza} value={raza.id_raza} onChange={this.onInputChange}>{raza.nombre}</option>
                                                    )

                                                    )}
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="5">
                                            <span> Finca </span>
                                            <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    type="select"
                                                    name="finca"
                                                    onChange={this.onInputChange}
                                                    required
                                                >
                                                    <option value={"La Esperanza"} onChange={this.onInputChange}>La Esperanza</option>
                                                    <option value={"La Palma"} onChange={this.onInputChange}>La Palma</option>
                                                    <option value={"La Chinita"} onChange={this.onInputChange}>La Chinita</option>
                                                    <option value={"Cambure"} onChange={this.onInputChange}>Cambure</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <div>
                                            {
                                                this.state.notificationModal &&
                                                <Modal
                                                    className="modal-dialog-centered modal-success"
                                                    contentClassName="bg-gradient-success"
                                                    isOpen={this.state.notificationModal}
                                                   toggle={() => this.toggleModal("notificationModal")}
                                                >
                                                    <div className="modal-header">
                                                        <h4 className="modal-title" id="modal-title-notification">
                                                            Bovino Registrado
                                                        </h4>
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
                                                            <h4 className="heading mt-4">¡ Genial !</h4>
                                                            <p>
                                                                Tu nuevo bovino ha sido registrado
                                                        </p>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer center">
                                                        <Button className="btn-white" text="center" color="default" type="button" href="/admin/bovinos/">
                                                            Entendido
                                                    </Button>
                                                    </div>
                                                </Modal>
                                            }
                                        </div>
                                        <div>
                                            {
                                                this.state.errorModal &&
                                                <Modal
                                                    className="modal-dialog-centered modal-warning"
                                                    contentClassName="bg-gradient-warning"
                                                    isOpen={this.state.errorModal}
                                                   toggle={() => this.toggleModal("errorModal")}
                                                >
                                                    <div className="modal-header">
                                                        <h4 className="modal-title" id="modal-title-notification">
                                                            Bovino No Registrado
                                                        </h4>
                                                        <button
                                                            aria-label="Close"
                                                            className="close"
                                                            data-dismiss="modal"
                                                            type="button"
                                                            onClick={() => this.toggleModal("errorModal")}
                                                        >
                                                            <span aria-hidden={true}>X</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="py-3 text-center">
                                                            <i className="ni ni-bell-55 ni-3x" />
                                                            <h4 className="heading mt-4">¡Ops!</h4>
                                                            <p>
                                                                Por favor revisa los campos y selecciona correctamente las opciones
                                                        </p>
                                                        </div>
                                                    </div>
                                                </Modal>
                                            }
                                        </div>
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

export default insertarTerneras;