import React, { useState } from "react";

const Todo = (props) => {
  const { item, Delete } = props;
  const { task, id } = item;

  const onRemove = () => {
    Delete(id)
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      <p>{task}</p>
      <button className="btn btn-danger" onClick={onRemove}>
        Delete
      </button>
    </li>
  );
};

export default Todo;
