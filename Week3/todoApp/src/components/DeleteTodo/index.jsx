import { Button } from "antd";

const DeleteTodo = ({ onDelete }) => {
  return (
    <Button type="primary" onClick={onDelete}>
      Görevi Sil
    </Button>
  );
};
export default DeleteTodo;
