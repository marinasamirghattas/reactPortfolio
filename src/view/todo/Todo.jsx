import TodoForm from "../../components/todo/TodoForm";
import TodoList from "../../components/todo/TodoList";
import "./Todo.css";

function Todo() {
  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default Todo;
