import React from "react";


import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "../../components/Headers/UserHeader.js";

const Profile = () => {
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0 center" xl="4" >
            <Card className="card-profile shadow center">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={
                          require("../../assets/img/theme/Perfil.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
            
                <div className="text-center">
                  <h3>
                    veterinario
                    <span className="font-weight-light"></span>
                  </h3>
              
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                   Especialidad
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    Lugar de tarbajo
                  </div>
                  <hr className="my-4" />
                  <p>
                    here more info,  here more info,  here more info, 
                    here more info,  here more info, 
                    here more info,  here more info, 
                  </p>
                  
                </div>
              </CardBody>
            </Card>
          </Col>
         
        </Row>
      </Container>
    </>
  );
};

export default Profile;
