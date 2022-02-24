import display from "./display";
import Point from "./Point";

// place your code on line 5 above the export statement below

class Snake {
  private currentPosition: Point;
  private currentDirection: number;
  constructor() {
    this.currentPosition = Point;
    this.currentDirection = 1;
    this.currentPosition = new Point(0, 0);
  }
  public move(numSquares: number) {
    if (this.currentDirection === 1) {
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y - numSquares
      );
    } else {
      this.currentPosition = this.currentPosition - numSquares;
    }
  }
  public turn(numSquares: number) {
    if (this.currentDirection === 1) {
      this.currentDirection = this.currentDirection - 3;
    } else {
      this.currentDirection = this.currentDirection + 3;
    }
  }
  public get position(): number {
    return this.currentPosition;
  }
  public get direction(): string {
    if (this.currentDirection === -2) return "backward";
    else return "forward";
    return this.currentDirection;
  }
}

export default Snake;
