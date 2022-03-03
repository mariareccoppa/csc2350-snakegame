import display from "./display";
import Point from "./Point";

// place your code on line 5 above the export statement below

class Snake {
  private currentPosition: Point;
  private currentDirection: number;
  sna: Snake;
  constructor(s: Snake) {
    this.sna = s;
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
  public turnRight(numSquares: number) {
    if (this.currentDirection === 1) {
      this.currentDirection = -2;
    } else if (this.currentDirection === -1) {
      this.currentDirection = 0;
    }
  }
  public turnUp(numSquares: number) {
    if (this.currentDirection === 0) {
      this.currentDirection = 0;
    } else if (this.currentDirection === -2) {
      this.currentDirection = -2;
    }
  }

  //right=1
  //left=-1
  //up=0
  //down=-2//

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
