import React from "react";
import { Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import history from "../history";

// interface IHeaderProps {
//   isLoggedIn
// }

class WelcomePage extends React.PureComponent<any> {
  componentDidMount() {
    !this.props.isLoggedIn && history.push("/");
  }
  public render() {
    return (
      <Navbar bg="light">
        <Navbar.Brand>
          {"Welcome Mr. "} <h1>{this.props.userName}</h1>
        </Navbar.Brand>
      </Navbar>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    ...state.UserInfoReducer
  };
}

export default connect(mapStateToProps)(WelcomePage);
