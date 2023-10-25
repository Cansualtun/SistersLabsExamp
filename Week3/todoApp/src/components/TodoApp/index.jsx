import { Input, Button } from "antd";
import { useState, useEffect } from "react";
import TodoItem from "../TodoItem";

const TodoApp = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(todos, "test2");
  }, [todos]);

  // yeni görev eklemek için
  const addTodo = () => {
    if (text) {
      setTodos([...todos, { text }]);
      console.log(todos, "test1");
      setText(""); //inputun içini temizlemek için
    }
  };
  // Todo Listteki taskleri silmek için kullanılan method
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <Input
          value={text}
          type="text"
          placeholder="Yeni Görev Ekle"
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={addTodo} type="primary">
          Ekle
        </Button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onDelete={() => deleteTodo(index)}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoApp;
