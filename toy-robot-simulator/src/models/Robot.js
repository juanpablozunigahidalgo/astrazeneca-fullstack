// src/models/Robot.js
class Robot {
    constructor() {
      this.x = null;
      this.y = null;
      this.direction = null;
      this.directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
    }
  
    place(x, y, direction) {
      if (this.isValidPosition(x, y)) {
        this.x = x;
        this.y = y;
        this.direction = direction;
      }
    }
  
    move() {
      if (this.direction === null) return; // Ignore if not placed
  
      let newX = this.x;
      let newY = this.y;
  
      switch (this.direction) {
        case 'NORTH':
          newY++;
          break;
        case 'EAST':
          newX++;
          break;
        case 'SOUTH':
          newY--;
          break;
        case 'WEST':
          newX--;
          break;
        default:
          break;
      }
  
      if (this.isValidPosition(newX, newY)) {
        this.x = newX;
        this.y = newY;
      }
    }
  
    left() {
      if (this.direction === null) return;
      const currentIndex = this.directions.indexOf(this.direction);
      this.direction = this.directions[(currentIndex + 3) % 4]; // Turn left
    }
  
    right() {
      if (this.direction === null) return;
      const currentIndex = this.directions.indexOf(this.direction);
      this.direction = this.directions[(currentIndex + 1) % 4]; // Turn right
    }
  
    report() {
      return `${this.x},${this.y},${this.direction}`;
    }
  
    isValidPosition(x, y) {
      return x >= 0 && x < 5 && y >= 0 && y < 5; // 5x5 table
    }
  }
  
  export default Robot;
  