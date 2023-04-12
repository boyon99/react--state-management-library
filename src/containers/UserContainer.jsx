import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "../modules/user";
import User from "../components/User";

function UserContainer() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);

  const onAdd = (user) => {
    dispatch(addUser(user));
  };

  const onDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  return <User users={users} onAdd={onAdd} onDelete={onDelete} />;
}

export default UserContainer;
