import React from "react";
import { Navbar } from "react-bootstrap";

interface IHeaderProps {
//   title:string,
//   children?:any
    
}

export const WelcomePage: React.SFC<IHeaderProps> = props => {
  return  <Navbar bg="light">
  <Navbar.Brand href="#home">{'Welcome Page'}</Navbar.Brand>
</Navbar>
};
