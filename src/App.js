import React, { useState } from "react";
import Todo from "./Components/Todo";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [priority, setPriority] = useState("low");
  const [todoList, setTodoList] = useState([]);

  const onTaskChange = (event) => {
    setTaskInput(event.target.value);
  };

  const onSelect = (event) => {
    setPriority(event.target.value);
  };

  const onAdd = () => {
    if (!taskInput) {
      alert("Please input a task");
      return;
    }
    const todo = { task: taskInput, priority: priority, id: Date.now() };
    setTodoList([...todoList, todo]);
    setTaskInput("");
  };

  const Delete = (id) => {
    const updatedList = todoList.filter((item) => item.id !== id);
    setTodoList(updatedList);
  };

  return (
    <div className="container mt-4">
      <h1>Priority To-Do List</h1>
      <div className="input-group mb-4">
        <input
          className="form-control"
          placeholder="Add a new task"
          value={taskInput}
          onChange={onTaskChange}
        />
        <select className="form-control" value={priority} onChange={onSelect}>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
        <button onClick={onAdd} className="input-group-append btn btn-primary">
          Add
        </button>
      </div>

      <div className="row">
        <div className="col-12 col-md-4">
          <h2>Low Priority</h2>
          <ul className="list-group">
            {todoList.map((item) => {
              if (item.priority === "low") {
                return <Todo item={item} key={item.id} Delete={Delete} />;
              }
            })}
          </ul>
        </div>

        <div className="col-12 col-md-4">
          <h2>Medium Priority</h2>
          <ul className="list-group">
            {todoList.map((item) => {
              if (item.priority === "medium") {
                return <Todo item={item} key={item.id} Delete={Delete} />
              }
            })}
          </ul>
        </div>

        <div className="col-12 col-md-4">
          <h2>High Priority</h2>
          <ul className="list-group">
            {todoList.map((item) => {
              if (item.priority === "high") {
                return <Todo item={item} key={item.id} Delete={Delete} />;
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
