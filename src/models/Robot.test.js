// src/models/Robot.test.js
import Robot from './Robot';

describe('Robot', () => {
  let robot;

  beforeEach(() => {
    robot = new Robot();
  });

  test('should place robot on the table', () => {
    robot.place(0, 0, 'NORTH');
    expect(robot.x).toBe(0);
    expect(robot.y).toBe(0);
    expect(robot.direction).toBe('NORTH');
  });

  test('should move robot north', () => {
    robot.place(0, 0, 'NORTH');
    robot.move();
    expect(robot.x).toBe(0);
    expect(robot.y).toBe(1);
  });

  test('should turn robot left', () => {
    robot.place(0, 0, 'NORTH');
    robot.left();
    expect(robot.direction).toBe('WEST');
  });

  test('should report position', () => {
    robot.place(1, 2, 'EAST');
    expect(robot.report()).toBe('1,2,EAST');
  });

  test('should not fall off the table', () => {
    robot.place(0, 0, 'SOUTH');
    robot.move();
    expect(robot.x).toBe(0);
    expect(robot.y).toBe(0); // Should not move down
  });
});
