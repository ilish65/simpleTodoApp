const Todo = ({ todo, completedTodo, deleteTodos, index }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completedTodo(index)}>Completed</button>
        <button onClick={() => deleteTodos(index)}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
