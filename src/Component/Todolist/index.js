import React, { useState } from "react";
import "./styles.css";

function TodoList() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItems() {
    if (!newItem) {
      alert("Enter an item");
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };
    setItems((oldlist) => [...oldlist, item]);
    setNewItem(" ");
  }
  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div>
      <h1>Todo List App</h1>
      <input
        type="text"
        placeholder="Add the Todo"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={() => addItems()}>Add</button>
      <ul className="todo-items">
        {items.map((item) => {
          return (
            <li className="item" key={item.id}>
              {item.value}{" "}
              <button className="del-btn" onClick={() => deleteItem(item.id)}>
                <span>🐣</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default TodoList;
