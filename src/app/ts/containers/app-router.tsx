import React from "react";
import {  Router, Route } from "react-router-dom";
import { HeaderComponent } from "../components/header";
import { Login } from "../components/login";
import { Register } from "../components/register";
import { FooterComponent } from "../components/footer";
import { Card } from "react-bootstrap";
import { WelcomePage } from "../components/welcome-page";
import history from "../history";

function AppRouter() {
  return (
    <Router history={history}>
        <Card>
          <Card.Header style={headerView}>
            <HeaderComponent title="Demo App" />
          </Card.Header>
          <Card.Body style={bodyView}>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/welcome" component={WelcomePage} />          
          </Card.Body>
          <Card.Footer style={footerView}>
            <FooterComponent />
          </Card.Footer>
        </Card>
    </Router>
  );
}

const footerView: React.CSSProperties = {
  bottom: 0,
  position: "fixed",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
const bodyView: React.CSSProperties = {
  flex: 1,
  flexGrow: 1,
  flexDirection: "column"
};
const headerView: React.CSSProperties = {
  width: "100%"
};

export default AppRouter;
