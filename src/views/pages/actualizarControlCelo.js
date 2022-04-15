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
import TernerasDestetadasHeader from "../../components/Headers/controlCelo.js";


class actualizarControlCelo extends React.Component {
    constructor() {
        super();
        this.state = {
            id_celo: "",
            fecha_inicio: "",
            detalles: "",
            id_macho: "",
            machos: [],
            id_hembra: "",
            hembras: [],
            id_usuario: "",
            encargado: [],
            notificationModal: false,
            errorModal: false,
        };
        this.onInputChange = this.onInputChange.bind(this);
    }


    async componentDidMount() {

        this.state.id_celo = localStorage.getItem("id_celo");
        const res = await axios.get('http://vache-server.herokuapp.com/celo/' + this.state.id_celo);
        this.setState({
            id_celo: res.data.info[0].id_celo,
            fecha_inicio: res.data.info[0].fecha_inicio,
            detalles: res.data.info[0].detalles,
            id_macho: res.data.info[0].id_macho,
            id_hembra: res.data.info[0].id_hembra,
            id_usuario: res.data.info[0].id_usuario,
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
            .get("http://vache-server.herokuapp.com/bovinos/tipo/2")
            .then(response => {
                console.log(response)
                this.setState({
                    machos: response.data.info
                });
                console.log("Registro Machos")
                console.log(this.state.control);
            })
            .catch(error => {
                console.log(error);
            });
    }

    onSubmit = async (e) => {


        e.preventDefault();


        const res = await axios.put('http://vache-server.herokuapp.com/celo/' + this.state.id_celo, {
            fecha_inicio: this.state.fecha_inicio,
            detalles: this.state.detalles,
            id_macho: this.state.id_macho,
            id_hembra: this.state.id_hembra,
            id_usuario: this.state.id_usuario,
            id_celo: this.state.id_celo,
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
            id_celo: "",
            fecha_inicio: "",
            detalles: "",
            id_macho: "",
            machos: [],
            id_hembra: "",
            hembras: [],
            id_usuario: "",
            encargado: [],
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
                                                <span> Hembra en Celo </span>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    type="select"
                                                    name="id_hembra"
                                                    value={this.state.id_hembra}
                                                    onChange={this.onInputChange}
                                                    required
                                                >
                                                    {this.state.hembras.map(hembras => (
                                                        <option key={hembras.chapeta} value={hembras.chapeta} onChange={this.onInputChange}>{hembras.nombre}</option>
                                                    )

                                                    )}
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md="5">
                                            <span> Toro</span>
                                            <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    type="select"
                                                    name="id_macho"
                                                    value={this.state.id_macho}
                                                    onChange={this.onInputChange}
                                                    required
                                                >
                                                    {this.state.machos.map(machos => (
                                                        <option key={machos.chapeta} value={machos.chapeta} onChange={this.onInputChange}>{machos.nombre}</option>
                                                    )
                                                    )}
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="5">
                                            <FormGroup>
                                                <span> Fecha Celo</span>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-calendar-grid-58" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <ReactDatetime
                                                        inputProps={{
                                                            placeholder: "Fecha Celo"
                                                        }}
                                                        dateFormat={'DD-MM-YYYY'}
                                                        timeFormat={false}
                                                        value={new Date(this.state.fecha_inicio)}
                                                        onChange={e => this.setState({ fecha_inicio: e })}
                                                        name="fecha_inicio"
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>
                                        <Col md="5">
                                            <span> Detalles </span>
                                            <FormGroup>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Detalles"
                                                    type="text"
                                                    value={this.state.detalles}
                                                    name="detalles"
                                                    onChange={this.onInputChange}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
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
                                                    <Button className="btn-white" text="center" color="default" type="button" href="/admin/controlCelo/">
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

export default actualizarControlCelo;