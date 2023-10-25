import DeleteTodo from "../DeleteTodo";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div>
      <span>{todo.text}</span>
      <DeleteTodo onDelete={onDelete} />
    </div>
  );
};

export default TodoItem;
