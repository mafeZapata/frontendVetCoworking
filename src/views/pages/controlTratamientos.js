
import React from "react";


import {
  Button,
  Card,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Table,
  Container,
  Row,
} from "reactstrap";


import Medicine from "../../components/Headers/controlTratamientos.js";


const controlTratamientos = () => {
  return (
    <>
      <Medicine />
      {/* Page content */}
      <Container className="mt--7" fluid>
      <Row>
          <div className="col">
            <Card className="shadow">
            <CardHeader className="bg-transparent pb-5">
            <div className="text-right">
              <Button
                className="btn-info btn-icon mr-4"
              >
                 <i className="ni ni-fat-add" />
                <span className="btn-inner--text">Añadir</span>
              </Button>           
            </div>
          </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Tipo Dosis</th>
                    <th scope="col">Fecha Ingreso</th>
                    <th scope="col">Fecha Salida</th>
                    <th scope="col">Detalles</th>
                    <th scope="col">Hora</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Bovino</th>
                    <th scope="col">Acciones</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                    <Media>
                          <span className="mb-0 text-sm">
                            text
                          </span>
                        </Media>
                    </th>
                    <td><Media>
                          <span className="mb-0 text-sm">
                            text
                          </span>
                        </Media></td>
                    <td>
                    <Media>
                          <span className="mb-0 text-sm">
                            text
                          </span>
                        </Media>
                    </td>
                    <td>
                    <Media>
                          <span className="mb-0 text-sm">
                            text
                          </span>
                        </Media>
                    </td>
                    <td>
                    <Media>
                          <span className="mb-0 text-sm">
                            text
                          </span>
                        </Media>
                    </td>
                    <td><Media>
                          <span className="mb-0 text-sm">
                            text
                          </span>
                        </Media></td>
                        <td><Media>
                          <span className="mb-0 text-sm">
                            text
                          </span>
                        </Media></td>
                        <td><Media>
                          <span className="mb-0 text-sm">
                            text
                          </span>
                        </Media></td>
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
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Actualizar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                           Eliminar
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default controlTratamientos;
