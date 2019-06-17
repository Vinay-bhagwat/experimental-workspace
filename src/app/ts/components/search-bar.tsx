import React from "react";
import { Form, FormControl, Button, Card } from "react-bootstrap";
import { searchActions } from "../actions/search-actions";
import { connect } from "react-redux";
import { ListGroup } from "react-bootstrap";

interface ISearchBarState {
  searchQuery: string;
  searchQueryList: [];
}

class SearchBar extends React.PureComponent<any, ISearchBarState> {
  state: ISearchBarState = {
    searchQuery: "",
    searchQueryList: []
  };
  handleInputChange = (event: any) => {
    const query: string = event.target.value;
    this.setState(
      {
        searchQuery: query
      },
      this.filterOut
    );
  };
  componentDidUpdate() {}
  filterOut = () => {
    const filterList = this.props.searchList.filter(
      (planet: any) =>
        planet.name.toLowerCase().indexOf(this.state.searchQuery) === 0
    );
    this.setState({
      searchQueryList: filterList
    });
  };

  componentDidMount() {
    this.props.dispatch(searchActions.getSearchList("planets"));
  }

  getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  renderList = () => {
    return this.state.searchQueryList.map((element: any) => {
      const color = this.getRandomColor();
      const population =
        parseInt(element.population) > 0
          ? parseInt(element.population)
          : 100000;
      const width = population / 12345;

      return (
        <ListGroup.Item
          style={{
            backgroundColor: color,
            width: `${width}px`
          }}
          key={element.created}
        >
          <ListGroup>
            <ListGroup.Item>Planet Name :{element.name}</ListGroup.Item>
            <ListGroup.Item>
              Planet Population :{element.population}
            </ListGroup.Item>
            <ListGroup.Item>Planet climate :{element.climate}</ListGroup.Item>
            <ListGroup.Item>Planet diameter :{element.diameter}</ListGroup.Item>
            <ListGroup.Item>Planet gravity :{element.gravity}</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      );
    });
  };

  render() {
    return (
      <Card>
        <Form inline>
          <FormControl
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button variant="outline-success" className="fa fa-search" />
        </Form>
        <ListGroup>{this.renderList()}</ListGroup>
      </Card>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    ...state.SearchInfoReducer
  };
}

export default connect(mapStateToProps)(SearchBar);
