import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Users extends Component {
  state = {
    users: []
  };
  fetchUsers = async () => {
    const response = await fetch("https://api.github.com/users?since=135");
    const result = await response.json();
    this.setState({
      users: result
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
          {this.state.users.map(user => {
            return (
              <li>
                <Link to={`/users/${user.login}`}>{user.login}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
