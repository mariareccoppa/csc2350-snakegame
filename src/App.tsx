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
    const firstSnake = new Snake();
    firstSnake.move(34);
    firstSnake.turn(6);
    firstSnake.move(4);

    const secondSnake = new Snake();
    secondSnake.move(30);
    secondSnake.turn(2);
    secondSnake.move(26);
    secondSnake.turn(6);
    display(
      "snake is moving",
      firstSnake.position,
      "squares,",
      "and snake is in a",
      firstSnake.direction,
      "direction"
    );
    display(
      "snake is moving",
      secondSnake.position,
      "squares,",
      "and snake is in a",
      secondSnake.direction,
      "direction"
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
