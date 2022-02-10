import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const delBtn = (event) => {
    setToDoList((currentArray) =>
      currentArray.filter((its) => {
        return its !== event.target.id;
      })
    );
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDoList((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  return (
    <div>
      <h1>To Do List ({toDoList.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="write your to do"
        ></input>
        <button>Add To Do</button>
      </form>
      <ul>
        {toDoList.map((item, index) => (
          <li key={index}>
            {item}
            <button id={item} onClick={delBtn}>
              [del]
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
