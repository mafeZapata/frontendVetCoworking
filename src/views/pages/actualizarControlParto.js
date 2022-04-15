import React from "react";
import axios from 'axios';
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
    Col,
    Modal,
    InputGroupAddon,
    InputGroupText,
    InputGroup
} from "reactstrap";
import TernerasDestetadasHeader from "../../components/Headers/controlPartos";



class actualizarControlPartos extends React.Component {
    constructor() {
        super();
        this.state = {
            id_bovino: "",
            hembras:[],
            fecha_parto: "",
            pesaje: "",
            observaciones: "",
            id_tipo:"",
            tipos: [],
            id_usuario: "",
            encargado: [],
            id_parto:"",
            notificationModal: false,
            errorModal: false,
        };
        this.onInputChange = this.onInputChange.bind(this);
    }


    async componentDidMount() {

        this.state.id_parto = localStorage.getItem("id_parto");
        const res = await axios.get('http://vache-server.herokuapp.com/controlPartos/' + this.state.id_parto);
        this.setState({
            id_bovino: res.data.info[0].id_bovino,
            fecha_parto: res.data.info[0].fecha_parto,
            pesaje: res.data.info[0].pesaje,
            observaciones: res.data.info[0].observaciones,
            id_tipo: res.data.info[0].id_tipo,
            id_usuario: res.data.info[0].id_usuario,
            id_parto: res.data.info[0].id_parto,
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

        axios
            .get("http://vache-server.herokuapp.com/bovinos/novillonaLactante/")
            .then(response => {
                console.log(response)
                this.setState({
                   hembras: response.data.info
                });
                console.log("Registro Hembras")
                console.log(this.state.control);
            })
            .catch(error => {
                console.log(error);
            });
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
    }

    onSubmit = async (e) => {


        e.preventDefault();


        const res = await axios.put('http://vache-server.herokuapp.com/controlPartos/' + this.state.id_parto, {
            id_bovino: this.state.id_bovino,
            fecha_parto: this.state.fecha_parto,
            pesaje: this.state.pesaje,
            observaciones: this.state.observaciones,
            id_tipo: this.state.id_tipo,
            id_usuario: this.state.id_usuario,
            id_parto: this.state.id_parto,
        }).then((response) => {
            console.log(this.state.id_macho );
            console.log("actualizacion" + response)
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
        }); console.log(res);


        this.setState({
            id_bovino: "",
            hembras:[],
            fecha_parto: "",
            pesaje: "",
            observaciones: "",
            id_tipo:"",
            tipos: [],
            id_usuario: "",
            encargado: [],
            id_parto:"",
        });



    };

    toggleModal = state => {
        this.setState({
            [state]: !this.state[state]
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
                                <Form onSubmit={this.onSubmit}>
                                    <Row>
                                        <Col md="5">
                                            <FormGroup>
                                                <span> Hembra en parto </span>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    type="select"
                                                    name="id_bovino"
                                                    value={this.state.id_hembra}
                                                    onChange={this.onInputChange}
                                                    required
                                                >
                                                    {this.state.hembras.map(hembras => (
                                                        <option key={hembras.id_bovino} value={hembras.id_bovino} onChange={this.onInputChange}>{hembras.nombre}</option>
                                                    )

                                                    )}
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="5">
                                            <FormGroup>
                                                <span> Fecha de parto</span>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-calendar-grid-58" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <ReactDatetime
                                                        inputProps={{
                                                            placeholder: "Fecha de parto"
                                                        }}
                                                        dateFormat={'DD-MM-YYYY'}
                                                        timeFormat={false}
                                                        value={new Date(this.state.fecha_parto)}
                                                        onChange={e => this.setState({ fecha_parto: e })}
                                                        name="fecha_inicio"
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>
                                        <Col md="5">
                                            <span> observaciones </span>
                                            <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Detalles"
                                                    type="text"
                                                    value={this.state.observaciones}
                                                    name="observaciones"
                                                    onChange={this.onInputChange}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Col md="5">
                                            <span> Pesaje </span>
                                            <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Pesaje"
                                                    type="number"
                                                    value={this.state.pesaje}
                                                    name="pesaje"
                                                    onChange={this.onInputChange}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
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
                                                    {this.state.tipos.map(tipos => (
                                                        <option key={tipos.id_tipo} value={tipos.id_tipo} onChange={this.onInputChange}>{tipos.nombre}</option>
                                                    )

                                                    )}
                                                </Input>
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
                                                        value={this.state.id_usuario}
                                                        required
                                                    >
                                                    {this.state.encargado.map(encargado => (
                                                        <option key={encargado.id_usuario} value={encargado.id_usuario} onChange={this.onInputChange}>{encargado.nombre}</option>
                                                    )
                                                    )}
                                                    </Input>
                                                </FormGroup>
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
                                                        Bovino Actualizado
                                                        </h4>
                                                    <button
                                                        aria-label="Close"
                                                        className="close"
                                                        data-dismiss="modal"
                                                        type="button"
                                                    >
                                                        <span aria-hidden={true}>X</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="py-3 text-center">
                                                        <i className="ni ni-bell-55 ni-3x" />
                                                        <h4 className="heading mt-4">¡ Genial !</h4>
                                                        <p>
                                                            El Bovino ha sido actualizado
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="modal-footer center">
                                                    <Button className="btn-white" text="center" color="default" type="button" href="/admin/ControlPartos/">
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
                                                        Bovino No Actualizado
                                                        </h4>
                                                    <button
                                                        aria-label="Close"
                                                        className="close"
                                                        data-dismiss="modal"
                                                        type="button"
                                                    >
                                                        <span aria-hidden={true}>X</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="py-3 text-center">
                                                        <i className="ni ni-bell-55 ni-3x" />
                                                        <h4 className="heading mt-4">¡Ops!</h4>
                                                        <p>
                                                            Por Favor Revisa los campos y selecciona correctamente las opciones
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
                                            <span className="btn-inner--text">Guardar</span>
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

export default actualizarControlPartos ;