import display from "./display";

// place your code on line 5 above the export statement below

class Snake {
  private currentPosition: number;
  private currentDirection: number;
  constructor(newSnake: 0) {
    this.currentPosition = 1;
    this.currentDirection = 1;
  }
  public move(numSquares: number) {
    if (this.currentPosition > 0) {
      this.currentPosition = 5;
    }
  }
  public turn(numSquares: number) {
    if (this.currentDirection > 0) {
      this.currentDirection = 5;
    }
  }
  public get position(): number {
    return this.currentPosition;
  }
}

export default Snake;
