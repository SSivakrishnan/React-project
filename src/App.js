import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import { Jumbotron } from "reactstrap";
import Searchbox from "./component/searchbox";
import Spinner from "./component/spinner";
import CharacterList from "./component/characterList";
import Pagination from "./component/pagination";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      characters: [],
      currentPage: 1,
      PostsPerPage: 10,
      searchCharacter: "",
    };
  }

  componentDidMount() {
    axios.get("https://www.breakingbadapi.com/api/characters").then((res) => {
      var data = res.data;
      this.setState({
        loading: true,
        characters: data,
      });
    });
  }
  paging = (number) => {
    this.setState({
      currentPage: number,
    });
  };
  handleInput = (e) => {
    this.setState({ searchCharacter: e.target.value });
  };

  render() {
    var {
      loading,
      characters,
      currentPage,
      PostsPerPage,
      searchCharacter,
    } = this.state;
    var filterCharacters = characters.filter((char) => {
      return char.name.toLowerCase().includes(searchCharacter.toLowerCase());
    });

    var indexOfLastPost = currentPage * PostsPerPage;
    var indexOfFirstPost = indexOfLastPost - PostsPerPage;
    var currentCharacters = filterCharacters.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    if (!loading) {
      return (
        <div className="spinner">
          <Spinner />
          &nbsp;&nbsp;&nbsp;
          <Spinner />
          &nbsp;&nbsp;&nbsp;
          <Spinner />
        </div>
      );
    } else {
      return (
        <div className="container">
          <Jumbotron>
            <div className="row">
              <div className="col-md-8">
                {" "}
                <h1 className="text-primary">My project</h1>
              </div>
              <div className="col-md-1">
                {" "}
                <p className="text-success">Search:</p>
              </div>
              <div className="col-md-3">
                <Searchbox handleInput={this.handleInput} />
              </div>
            </div>
          </Jumbotron>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-4 text-primary float-right">
              <p>Name</p>
            </div>
            <div className="col-md-3 text-primary">
              <p>Occupation</p>
            </div>
            <div className="col-md-2 text-primary ">
              <p>Birthday</p>
            </div>
            <div className="col-md-2 text-primary">
              <p>Status</p>
            </div>
          </div>
          <CharacterList currentCharacters={currentCharacters} />
          <Pagination
            PostsPerPage={PostsPerPage}
            totalCharacters={characters.length}
            paging={this.paging}
          />
        </div>
      );
    }
  }
}

export default App;
