import React, { Component } from "react";

export default class Profile extends Component {
  state = {
    user: []
  };
  fetchUsers = async () => {
    const response = await fetch(
      `https://api.github.com/users/${this.props.match.params.id}`
    );
    const result = await response.json();
    this.setState({
      user: result
    });
    console.log(result);
  };
  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <div>
        <ul>
          {Object.keys(this.state.user).map(p => {
            return (
              <div>
                <h3>{p}:</h3>
                <h5>{this.state.user[p]}</h5>
                <hr></hr>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
