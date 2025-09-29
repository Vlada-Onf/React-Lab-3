import { useState } from "react";

function TodoItem({ task, onDelete }) {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      <div>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => setIsCompleted((prev) => !prev)}
        />
        <span
          style={{
            marginLeft: "10px",
            textDecoration: isCompleted ? "line-through" : "none",
            color: isCompleted ? "gray" : "black",
          }}
        >
          {task.text}
        </span>
      </div>
      <button onClick={() => onDelete(task.id)} className="delete-btn">
  Delete
</button>
    </li>
  );
}

export default TodoItem;
