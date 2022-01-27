import "./styles.css";
// import Snake from "./Snake.ts";
import Snake from "./Snake";
import display from "./display";
import { useEffect } from "react";

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
    const firstSnake = new Snake("1");
    firstSnake.move(10);
    firstSnake.turn(20);
    const secondSnake = new Snake("2");
    secondSnake.move(21);
    secondSnake.turn(7);

    display(
      "snake is moving",
      firstSnake.position,
      "squares,",
      "and snake is turning",
      firstSnake.direction,
      "squares"
    );
    display(
      "snake is moving",
      secondSnake.position,
      "squares,",
      "and snake is turning",
      secondSnake.direction,
      "squares"
    );
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <pre id="output">
        OUTPUT: <br />
      </pre>
    </div>
  );
}
