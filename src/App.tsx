import "./styles.css";
// import Snake from "./Snake.ts";
import Snake from "./Snake";
import display from "./display";
import { useEffect } from "react";
import WorldModel from "./WorldModel";
import checkerboard from "./checkerboard.jpg";

export default function App() {
  useEffect(() => {
    const gameCanvas = document.getElementById("game") as HTMLCanvasElement;
    if (gameCanvas) {
      const ctx = gameCanvas.getContext("2d");
      const floorImage = new Image(256, 256);
      floorImage.src = checkerboard;
      floorImage.onload = () => {
        ctx?.drawImage(floorImage, 256, 256);
      };
    }
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
    const firstSnake = new Snake();
    firstSnake.move(34);
    firstSnake.turnRight(6);
    firstSnake.move(4);

    const WorldModel = new WorldModel(secondSnake);
    WorldModel.update;
    WorldModel.move(30);
    WorldModel.s.turnRight(2);
    WorldModel.move(26);
    WorldModel.s.turnRight(6);
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
        <canvas width="320" height="460" id="game" />
      </pre>
    </div>
  );
}
