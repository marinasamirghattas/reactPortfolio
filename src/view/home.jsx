import Decreament from "../components/decreament";
import Increament from "../components/increament";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";


function Home() {

  const [conter,setCounter]=useState(99)

  const increament=()=>{
    setCounter(conter+1)
  }

  const decreament=()=>{
    setCounter(conter-1)
  }

    return (
        <div>
        <h1>your counter : {conter}</h1>
      <div className=' my-5 d-flex justify-content-center'>
       
    <Increament increament={increament}></Increament>
    <Decreament decreament={decreament}></Decreament>
      </div>
      </div>
    );
  }
  
  export default Home;