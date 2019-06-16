import React from "react";
import { Navbar } from "react-bootstrap";

interface IHeaderProps {
  title:string,
  children?:any
    
}

export const HeaderComponent: React.SFC<IHeaderProps> = props => {
  return  <Navbar bg="light">
  <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
</Navbar>
};
