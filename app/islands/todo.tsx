import { useState, useEffect } from "hono/jsx";

export default function Todo() {
  const [todo, setTodo] = useState("" as string);
  const [todos, setTodos] = useState([] as string[]);
  useEffect(() => {}, [todo]);
  const handleInputChange = (event: any) => {
    setTodo(event.target.value);
  };
  return (
    <div class="row">
      <div class="col-8">
        <input
          type="text"
          name="todoInput"
          onChange={handleInputChange}
          value={todo}
        />
      </div>
      <div class="col-4" style="margin-bottom: 1em;">
        <button
          onClick={() => {
            setTodos([...todos, todo]);
            console.log("todo", todo);
            setTodo("");
            console.log("todo", todo);
          }}>
          Add
        </button>
      </div>

      {todos.map((todo, index) =>
        todo ? (
          <div class="col-12" key={index}>
            👉 {todo}
          </div>
        ) : null
      )}
    </div>
  );
}
