import React, { useState } from "react";
import "./App.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onsubmithandler = event => {
    event.preventDefault();
    if (!inputValue) {
      alert("Please type something to add");
      return;
    }
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const onDeletehandle = index => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <br></br>
            <h1 className= 'bigblue' >Add Todo List Here</h1>
      <form onSubmit={onsubmithandler}>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button type="submit">Add Todo Element</button>
      </form>
      <ul>
        <h3>Entered Data Will be shown here</h3>
        {todos.map((todo, index) => (
          <ul>
          <li key={index}>
            {todo}
            <button onClick={() => onDeletehandle(index)}>Delete</button>
          </li>
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
