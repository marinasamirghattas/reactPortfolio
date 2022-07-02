import Decreament from "../../components/counter/decreament";
import Increament from "../../components/counter/increament";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

function Counter() {
  const counter = useSelector((state) => state.counter);

  return (
    <div className=" my-5">
      <h1>I will donate with : {counter} $</h1>
      <div className=" my-5 d-flex justify-content-center">
        <Increament></Increament>
        <Decreament></Decreament>
      </div>
    </div>
  );
}
// increament={increament}  decreament={decreament}

export default Counter;
