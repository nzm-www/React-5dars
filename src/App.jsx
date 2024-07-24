import { useState } from "react";
import "./App.css";

function App() {
  const [info, setInfo] = useState([]);
  const [value, setValue] = useState("");

  function handleChange(value) {
    if (value.trim() !== "") {
      setInfo((t) => [...t, value]);
      setValue("");
    }
    console.log(info);
    setValue("");
  }

  function deleteTodo(index) {
    const uptadedTodo = info.filter((_, i) => i !== index);
    setInfo(uptadedTodo);
  }

  return (
    <>
      <div className="todo">
        <h2>Todo App</h2>
        <div className="inp" onChange={(e) => setValue(e.target.value)}>
          <input type="text" />
          <button onClick={() => handleChange(value)}>+</button>
        </div>
        {info.map((item, index) => {
          return (
            <div className="info">
              <h3>{item}</h3>
              <button onClick={() => deleteTodo(index)}>Del</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
