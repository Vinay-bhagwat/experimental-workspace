import React from "react";
import { Card } from "react-bootstrap";

interface IBasicPageProps {
  body: React.ReactNode;
  footer: React.ReactNode;
  header: React.ReactNode;
}

export const BasicPage: React.SFC<IBasicPageProps> = props => {
  return (
    <Card>
      <Card.Header style={headerView}>{props.header}</Card.Header>
      <Card.Body style={bodyView}>{props.body}</Card.Body>
      <Card.Footer style={footerView}>{props.footer}</Card.Footer>
    </Card>
  );
};

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
