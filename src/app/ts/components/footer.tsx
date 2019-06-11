import React from "react";
import { Button } from "react-bootstrap";

export const FooterComponent: React.SFC = () => {
  return <footer>{getItems()}</footer>;
};

const getItems = (): React.ReactNode => {
  return [
    "fa fa-facebook",
    "fa fa-twitter",
    "fa fa-google",
    "fa fa-linkedin",
    "fa fa-youtube",
    "fa fa-instagram",
    "fa fa-pinterest"
  ].map((item, index) => (
    <Button href="#" style={footerItem} className={item} key={index} />
  ));
};
const footerItem: React.CSSProperties = {
  marginLeft: 5,
  marginRight: 5
};
