import React from "react";
import { Navbar } from "react-bootstrap";

interface IHeaderProps {
    
}

export const Header: React.SFC<IHeaderProps> = props => {
  return  <Navbar bg="light">
  <Navbar.Brand href="#home">Brand link</Navbar.Brand>
</Navbar>
};
