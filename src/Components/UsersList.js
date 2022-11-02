import React from "react";
import { RiCloseFill } from "react-icons/ri";
import "./UsersList.css";

const UsersList = (props) => {
  const usersList = props.users;

  return (
    <ul className="users-list">
      {usersList.map((user) => {
        return (
          <li key={user.id}>
            <p>{user.name}</p>
            <RiCloseFill
              onClick={() => {
                props.removeUser(user.id);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default UsersList;
