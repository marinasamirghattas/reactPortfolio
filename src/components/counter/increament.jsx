import { increamentAction } from "../../redux/counterredux";
import { useDispatch } from "react-redux";

function Increament() {
  const dispatch = useDispatch();
  const increamentCounter = () => {
    dispatch(increamentAction());
  };
  return (
    <div className="text-center my-5">
      <button className="btn btn-success mx-2" onClick={increamentCounter}>
        +
      </button>
    </div>
  );
}

export default Increament;
