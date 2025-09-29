import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";
import "./Todo.css";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (task) => {
    const newTodo = {
      id: Date.now(),
      text: task,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} task={todo} onDelete={handleDeleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
