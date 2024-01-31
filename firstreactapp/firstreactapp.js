import { useEffect, useState } from "react";
import "./styles.css";
import Message from "./Message";
import Counter from "./Counter";

export default function App() {
  //To handle state of those two variables (using destructuring)
  //original state of "advice" is = ""
  //sestState allows me to change it later
  const [advice, setAdvice] = useState("");
  let [numberofAdvices, setNumberofAdvices] = useState(0);

  async function consejos() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data.slip.advice);

  }

  //useEffect takes 2 arguments, a function to run at the beginning
  //and an array (dependency array)
  //here i am using useEffect to run getAdvice on page load
  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <h1>Advice of today</h1>
      {/* <h2>{advice}</h2> */}
      <Message message={advice}></Message>
      <button onClick={getAdvice}>Get Advice</button>
      <Counter count={numberofAdvices}></Counter>
      {/* <p>
        You have read <strong>{numberofAdvices}</strong> pieces of advice.
      </p> */}
    </div>
  );
}
