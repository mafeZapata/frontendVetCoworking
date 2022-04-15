import React from "react";
import axios from 'axios';
import moment from 'moment';
import ReactDatetime from "react-datetime";
import { Link } from "react-router-dom";

import {
    FormGroup,
    Form,
    Input,
    Row,
    Card,
    Button,
    Container,
    Modal,
    Col,
    InputGroupAddon,
    InputGroupText,
    InputGroup
} from "reactstrap";

import TernerasDestetadasHeader from "../../components/Headers/controlPartos.js";

class insertarControlParto extends React.Component {

    constructor() {
        super();
        this.state = {
            id_bovino:"",
            id_tipo:"",
            tipos:[],
            nombre:"",
            id_raza: "",
            razas:[],
            finca:"",
            fecha_parto:"",
            pesaje:"",
            observaciones:"",
            id_mama:"",
            id_papa:"",
            mamas: [],
            papas: [],
            id_usuario:"",
            encargado:[],
            notificationModal: false,
            errorModal: false,
        }
        this.onInputChange = this.onInputChange.bind(this);
    }

    componentDidMount() {

        this.state.nombre = localStorage.getItem("nombre")
        this.state.id_mama = localStorage.getItem("chapeta")
        
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

        axios
            .get("http://vache-server.herokuapp.com/bovinos/novillonaLactante/")
            .then(response => {
                console.log(response)
                this.setState({
                   mamas: response.data.info
                });
                console.log("Registro Hembras")
                console.log(this.state.control);
            })
            .catch(error => {
                console.log(error);
            });
        axios
        .get("http://vache-server.herokuapp.com/bovinos/tipo/2")
        .then(response => {
            console.log(response)
            this.setState({
                papas: response.data.info
            });
            console.log("Registro Machos")
            console.log(this.state.control);
        })
        .catch(error => {
            console.log(error);
        });

        axios
        .get("http://vache-server.herokuapp.com/usuarios/NombreId")
        .then(response => {
            console.log(response)
            this.setState({
                encargado: response.data.info
            });
            console.log("Registro Usuarios")
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


        await axios.post('http://vache-server.herokuapp.com/controlPartos', {
            id_bovino:this.state.id_bovino,
            id_tipo: this.state.id_tipo,
            nombre:this.state.nombre,
            id_raza:this.state.id_raza,
            finca:this.state.finca,
            fecha_parto:this.state.fecha_parto,
            pesaje: this.state.pesaje,
            observaciones: this.state.observaciones,
            id_mama: this.state.id_mama,
            id_papa: this.state.id_papa,
            id_usuario:this.state.id_usuario,
        }).then((response) => {
            console.log(response);
            if (response.status === 200 && response.data.ok === true) {
                setTimeout(() => {
                    this.setState({ notificationModal: true });
                }, 200)
            }
            else {
                setTimeout(() => {
                    this.setState({ errorModal: true });
                }, 200)
            }
           
        });


        this.setState({
            id_bovino:"",
            id_tipo:"",
            tipos:[],
            nombre:"",
            id_raza: "",
            razas:[],
            finca:"",
            fecha_parto:"",
            pesaje:"",
            observaciones:"",
            id_mama:"",
            id_papa:"",
            mamas: [],
            papas: [],
            id_usuario:"",
            encargado:[]
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
                                                    placeholder="Chapeta de bovino"
                                                    type="text"
                                                    value={this.state.id_bovino}
                                                    name="id_bovino"
                                                    onChange={this.onInputChange}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="5">
                                            <FormGroup>
                                                <span> Nombre de bovino </span>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Nombre de bovino"
                                                    type="text"
                                                    value={this.state.nombre}
                                                    name="nombre"
                                                    onChange={this.onInputChange}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                    
                                        <Col md="5">
                                        <FormGroup>
                                                <span> Fecha parto</span>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-calendar-grid-58" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <ReactDatetime
                                                        inputProps={{
                                                            placeholder: "Fecha parto"
                                                        }}
                                                        dateFormat={'DD-MM-YYYY'}
                                                        timeFormat={false}
                                                        value={new Date(this.state.fecha_parto)}
                                                        onChange={e => this.setState({ fecha_parto: e })}
                                                        name="fecha_parto"
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>
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
                                                    {this.state.tipos.map(tipos => (
                                                        <option key={tipos.id_tipo} value={tipos.id_tipo} onChange={this.onInputChange}>{tipos.nombre}</option>
                                                    )

                                                    )}
                                                </Input>
                                            </FormGroup>
                                            </Col>
                                   
                                    
                                        <Col md="5">
                                                <span> Raza de la cria</span>
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
                                        <Col md="5">
                                        <span> Fincas </span>
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
                                        <Row>
                                        <Col md="5">
                                            <FormGroup>
                                                <span> Pesaje</span>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Peso de la Cria"
                                                    type="number"
                                                    value={this.state.pesaje}
                                                    name="pesaje"
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
                                                ><option value={"Seleccione la mamá del bovino"} onChange={this.onInputChange}>Seleccione la mamá del bovino</option>
                                                    {this.state.mamas.map(mamá => (
                                                        <option key={mamá.id_mama} value={mamá.id_mama} onChange={this.onInputChange}>{mamá.nombre}</option>
                                                    )

                                                    )}
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                       
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
                                                >  <option value={"Seleccione el padre del bovino"} onChange={this.onInputChange}>Seleccione el padre del bovino</option>
                                                   {this.state.papas.map(papá => (
                                                            <option key={papá.id_papa} value={papá.id_papa} onChange={this.onInputChange}>{papá.nombre}</option>
                                                        )

                                                        )}  
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    
                                
                                    <Col md="5">
                                            <span> Observaciones</span>
                                            <FormGroup>
                                            <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Observaciones del Parto"
                                                    type="text"
                                                    value={this.state.observaciones}
                                                    name="observaciones"
                                                    onChange={this.onInputChange}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="5">
                                            <span>Encargado</span>
                                            <FormGroup>
                                                <FormGroup>
                                                <Input
                                                        className="form-control-alternative"
                                                        id="exampleFormControlInput1"
                                                        type="select"
                                                        name="id_usuario"
                                                        onChange={this.onInputChange}
                                                        required
                                                    >
                                                    <option value={"Seleccione el encargado del parto"} onChange={this.onInputChange}>Seleccione el usuario que registra el parto</option>
                                                    {this.state.encargado.map(encargado => (
                                                        <option key={encargado.id_usuario} value={encargado.id_usuario} onChange={this.onInputChange}>{encargado.nombre}</option>
                                                    )
                                                    )}
                                                    </Input>
                                                </FormGroup>
                                            </FormGroup>
                                        </Col>
                                        </Row>
                                        </Row>
                                        <div>
                                            {
                                                this.state.notificationModal &&
                                                <Modal
                                                    className="modal-dialog-centered modal-danger"
                                                    contentClassName="bg-gradient-danger"
                                                    isOpen={this.state.notificationModal}
                                                   toggle={() => this.toggleModal("notificationModal")}
                                                >
                                                    <div className="modal-header">
                                                        <h4 className="modal-title" id="modal-title-notification">
                                                            Control de parto Registrado
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
                                                                Tu control de parto ha sido registrado
                                                        </p>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer center">
                                                        <Button className="btn-white" text="center" color="default" type="button" href="/admin/controlPartos/">
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
                                                            Control de parto No Registrado
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
                                                            <h4 className="heading mt-4">¡Opss!</h4>
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
                                            className="btn-danger btn-icon mr-4"
                                            color="danger"

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



export default insertarControlParto;