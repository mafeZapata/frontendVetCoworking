import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import logo from "../assets/img/brand/logo.jpg";
import routes from "../routes.js";

const Auth = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.body.classList.add("bg-success");
    return () => {
      document.body.classList.remove("bg-success");
    };
  }, []);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <div className="main-content" ref={mainContent}>
      
        <div className="bg-white py-7 py-lg-7">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="6" md="6">
                <center>
            <img src={logo} height="100px" alt=""/>
            </center>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
              <polygon
                className="fill-success"
                points="2060 0 2060 100 0 100"
              />
          </div>
        </div>
       
       
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Switch>
              {getRoutes(routes)}
              <Redirect from="*" to="/auth/login" />
            </Switch>
          </Row>
        </Container>
      </div>
   
    </>
  );
};

export default Auth;
