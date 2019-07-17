import React from "react";
import { Navbar } from "react-bootstrap";
import SearchBar from "./search-bar";
import { connect } from "react-redux";
import { searchActions } from "../actions/search-actions";

interface IDemoProps {
  title: string;
  children?: any;
}

export class DemoComponent extends React.PureComponent<IDemoProps &any> {
  public componentDidMount() {
    this.props.dispatch(searchActions.getSearchList("planets"));
  }
  public render() {
    return (
      <Navbar bg="light">
        <Navbar.Brand href="#home">{this.props.title}</Navbar.Brand>
        <SearchBar />
      </Navbar>
    );
  }
}
const mapStateToProps = (state: any) => {
  return { state };
};

export default connect(mapStateToProps)(DemoComponent);
