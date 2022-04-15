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
    Col,
    InputGroupAddon,
    InputGroupText,
    InputGroup
} from "reactstrap";

import TernerasDestetadasHeader from "../../components/Headers/actualizarMedicamentosHeader.js";

class actualizarMedicamentos extends React.Component {

    constructor() {
        super();
        this.state = {
            codigo: "",
            nombre: "",
            descripcion: "",
            horas_retiro_leche: "",
            fecha_compra: "",
            fecha_vencimiento: "",
            disponibilidad: "",
        };
        this.onInputChange = this.onInputChange.bind(this);
    }

    async componentDidMount() {

        this.state.codigo = localStorage.getItem("codigo");
        this.state.nombre = localStorage.getItem("nombre");
        this.state.descripcion = localStorage.getItem("descripcion");
        this.state.horas_retiro_leche = localStorage.getItem("horas_retiro_leche");
        this.state.fecha_compra = localStorage.getItem("fecha_compra");
        this.state.fecha_vencimiento = localStorage.getItem("fecha_vencimiento");
        this.state.disponibilidad = localStorage.getItem("disponibilidad");
        console.log(this.state.codigo);
        const res = await axios.get('http://vache-server.herokuapp.com/medicamentos/' + this.state.codigo);
        this.setState({
            codigo: res.data.info[0].codigo,
            nombre: res.data.info[0].nombre,
            descripcion: res.data.info[0].descripcion,
            horas_retiro_leche: res.data.info[0].horas_retiro_leche,
            fecha_compra: res.data.info[0].fecha_compra,
            fecha_vencimiento: res.data.info[0].fecha_vencimiento,
            disponibilidad: res.data.info[0].disponibilidad,
        });

       
    }

    onSubmit = async (e) => {


        e.preventDefault();


        const res = await axios.put('http://vache-server.herokuapp.com/medicamentos/' + this.state.codigo, {
            codigo: this.state.codigo,
            nombre: this.state.nombre,
            descripcion: this.state.descripcion,
            horas_retiro_leche: this.state.horas_retiro_leche,
            fecha_compra: this.state.fecha_compra,
            fecha_vencimiento: this.state.fecha_vencimiento,
            disponibilidad: this.state.disponibilidad,
        }).then((response) => {
            console.log(response)
            alert('Medicamento Actualizado');
            window.location.href = '/admin/medicamentos';
        }); console.log(res);


        this.setState({
            codigo: "",
            nombre: "",
            descripcion: "",
            horas_retiro_leche: "",
            fecha_compra: "",
            fecha_vencimiento: "",
            disponibilidad: "",
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
                                                <span> Código </span>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Código"
                                                    type="number"
                                                    value={this.state.codigo}
                                                    name="codigo"
                                                    onChange={this.onInputChange}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="5">
                                            <FormGroup>
                                                <span> Nombre Medicamento </span>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Nombre Medicamento"
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
                                            <FormGroup>
                                                <span> Descripción </span>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Descripción"
                                                    type="text"
                                                    value={this.state.descripcion}
                                                    name="descripcion"
                                                    onChange={this.onInputChange}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="5">
                                            <FormGroup>
                                                <span> Horas Retiro Leche </span>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Horas Retiro Leche"
                                                    type="number"
                                                    value={this.state.horas_retiro_leche}
                                                    name="horas_retiro_leche"
                                                    onChange={this.onInputChange}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="5">
                                            <span> Fecha Compra </span>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-calendar-grid-58" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <ReactDatetime
                                                        inputProps={{
                                                            placeholder: "Fecha Compra"
                                                        }}
                                                        dateFormat={'DD-MM-YYYY'}
                                                        timeFormat={false}
                                                        value={new Date(this.state.fecha_compra)}
                                                        onChange={e => this.setState({ fecha_compra: e })}
                                                        name="fecha_compra"
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>
                                        <Col md="5">
                                            <span> Fecha Vencimiento </span>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-calendar-grid-58" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <ReactDatetime
                                                        inputProps={{
                                                            placeholder: "Fecha Vencimiento"
                                                        }}
                                                        dateFormat={'DD-MM-YYYY'}
                                                        timeFormat={false}
                                                        value={new Date(this.state.fecha_vencimiento)}
                                                        onChange={e => this.setState({ fecha_vencimiento: e })}
                                                        name="fecha_vencimiento"
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="5">
                                            <FormGroup>
                                                <span> Disponibilidad </span>
                                                <Input
                                                    className="form-control-alternative"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Disponibilidad"
                                                    type="number"
                                                    value={this.state.disponibilidad}
                                                    name="disponibilidad"
                                                    onChange={this.onInputChange}
                                                    required
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        <Button
                                            type="submit"
                                            className="btn-warning btn-icon mr-4"
                                            color="warning"

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

export default actualizarMedicamentos;