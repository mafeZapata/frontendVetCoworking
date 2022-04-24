import React from "react";
import { Link } from 'react-router-dom'

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from "reactstrap";

const Login = () => {
  return (
    <>
      <Col lg="6" md="9">
        <Card className="bg-white shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Correo Electronico"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Contraseña"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
                <small>¿ Olvidaste tu contraseña ?</small>
              </FormGroup>
              <div className="text-center">
                <Link to={'/admin/inicio'}>
                  <Button className="my-4" color="info" type="button">
                    Iniciar Sesión
                </Button>
                </Link>
              </div>
              <Col className="text-center" xs="12">
            <Link to={'/auth/register'}>
              <a
                className="text-default"
              >
                <small>¿No tienes una cuenta ? Regístrate</small>
              </a>
            </Link>
          </Col>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Login;
