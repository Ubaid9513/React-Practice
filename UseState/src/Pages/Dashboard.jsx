import React, { useState } from "react";

function Dashboard() {
  const [todos, setTodos] = useState([
    { value: "Ubaid", disabled: true },
    { value: "Aslam", disabled: true },
  ]);
  const [value, setValue] = useState("");
  const addTodo = () => {
    setTodos([...todos, { value, disabled: true }]);
    setValue("");
  };
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <button
        onClick={() => {
          setTodos([]);
        }}
      >
        Delete All
      </button>
      <br />
      <ul>
        {todos.map((v, i) => (
          <li key={i}>
            <input
              disabled={v.disabled}
              defaultValue={v.value}
              type="text"
              onChange={(e) => {
                v.value = e.target.value;
              }}
            />
            {v.disabled ? (
              <button
                onClick={() => {
                  todos.splice(i, 1, { ...v, disabled: false });
                  setTodos([...todos]);
                }}
              >
                Edit
              </button>
            ) : (
              <button
                onClick={() => {
                  v.disabled = true;
                  setTodos([...todos]);
                }}
              >
                Update
              </button>
            )}
            <button
              onClick={() => {
                const oldTodos = [...todos];
                console.log(i);
                oldTodos.splice(i, 1);
                setTodos(oldTodos);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Dashboard;
