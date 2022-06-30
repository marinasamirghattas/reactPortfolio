import { useSelector, useDispatch } from "react-redux";
import { deleteTodoAction } from "../../redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const deleteTodo = (index) => {
    dispatch(deleteTodoAction(index));
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
              onClick={() => deleteTodo(i)}
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
