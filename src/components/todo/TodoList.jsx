import { useSelector, useDispatch } from "react-redux";
import { deleteTodoAction } from "../../redux/todoredux";
import { deleteTodo } from "../../redux/features/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todoSlice.todos);
  const dispatch = useDispatch();

  const onDeleteTodo = (index) => {
    dispatch(deleteTodo(index));
  };

  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <div className="border" key={i}>
            <ul>
              <li className="d-flex">
                <div className="text">
                  <p>Title : {todo.title}</p>
                  <p>Content : {todo.content}</p>
                </div>
              </li>
            </ul>
            <button
              className="btn btn-danger mx-5"
              onClick={() => onDeleteTodo(i)}
            >
              X
            </button>
          </div>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-left">
      <h5 className="mx-5 text-muted">Todos List</h5>
      {todosList}
    </div>
  );
};

export default TodoList;
