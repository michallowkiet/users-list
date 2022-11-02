import React, { Component } from "react";
import "./Users.css";
import UsersList from "./UsersList";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  submitHandler = (e) => {
    e.preventDefault();

    let user = { id: Date.now(), name: this._inputName.value };

    this.setState((state) => {
      return {
        users: [...state.users, user],
      };
    });

    this._inputName.value = "";
  };

  removeUserHandler = (userId) => {
    this.setState((state) => {
      return {
        users: state.users.filter((user) => user.id !== userId),
      };
    });
  };

  render() {
    return (
      <div className="users">
        <h1>User's List</h1>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Enter name"
            ref={(el) => {
              this._inputName = el;
            }}
          />
          <button type="submit">Add user</button>
        </form>
        <UsersList
          users={this.state.users}
          removeUser={this.removeUserHandler}
        />
      </div>
    );
  }
}

export default Users;
