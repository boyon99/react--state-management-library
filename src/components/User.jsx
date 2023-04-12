import React, { useState } from "react";

const User = ({ users, onAdd, onDelete }) => {
  const [userInput, setUserInput] = useState({});
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>
          {user.name} {user.id}
          <button onClick={() => onDelete(user.id)}>삭제하기</button>
        </p>
      ))}
      <input name="name" onChange={onInputChange}></input>
      <input name="email" onChange={onInputChange}></input>
      <button onClick={() => onAdd(userInput)}>추가하기</button>
    </div>
  );
};

export default User;
