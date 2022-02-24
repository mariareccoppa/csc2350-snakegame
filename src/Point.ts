class Point {
  private xCoord: number;
  private yCoord: number;
  constructor(xCoord: number, yCoord: number) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  }
  get x() {
    return this.xCoord;
  }
  get y() {
    return this.yCoord;
  }
}
export default Point;
