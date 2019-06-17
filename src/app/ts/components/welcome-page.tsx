import React from "react";
import { Navbar, Card } from "react-bootstrap";
import { connect } from "react-redux";
import history from "../history";
import SearchBar from "./search-bar";
import { SpinnerComponent } from "./spinner";

class WelcomePage extends React.PureComponent<any> {
  componentDidMount() {
    !this.props.isLoggedIn && history.push("/");
  }
  public render() {
    return (
      <Card>
        <Navbar bg="light">
          <Navbar.Brand>
            {"Welcome Mr. "} <h1>{this.props.userName}</h1>
          </Navbar.Brand>
        </Navbar>
        <Card.Body>
          <SearchBar />
        </Card.Body>
        <Card.Body>{this.props.searchResult && <SpinnerComponent />}</Card.Body>
      </Card>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    ...state.UserInfoReducer,
    ...state.SearchInfoReducer
  };
}

export default connect(mapStateToProps)(WelcomePage);
