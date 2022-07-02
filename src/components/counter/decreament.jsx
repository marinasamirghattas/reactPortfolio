import { decreamentAction } from "../../redux/counterredux";
import { useDispatch } from "react-redux";

function Decreament() {
  const dispatch = useDispatch();
  const decreamentCounter = () => {
    dispatch(decreamentAction());
  };
  return (
    <div className="text-center my-5">
      <button
        className="btn btn-danger mx-2"
        onClick={() => decreamentCounter()}
      >
        -
      </button>
    </div>
  );
}

export default Decreament;
