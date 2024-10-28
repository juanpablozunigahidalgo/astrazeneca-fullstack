// src/components/RobotController.js
import React, { useState } from 'react';
import Robot from '../models/Robot';
import '../style.css';

const RobotController = () => {
  const [robot] = useState(new Robot());
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const executeCommands = () => {
    const commands = input.split('\n');
    commands.forEach((command) => {
      const parts = command.trim().split(' ');
      switch (parts[0]) {
        case 'PLACE':
          const [x, y, direction] = parts[1].split(',');
          robot.place(Number(x), Number(y), direction);
          break;
        case 'MOVE':
          robot.move();
          break;
        case 'LEFT':
          robot.left();
          break;
        case 'RIGHT':
          robot.right();
          break;
        case 'REPORT':
          setOutput(robot.report());
          break;
        default:
          break;
      }
    });
  };

  return (
    <div className="robot-controller">
      <h1>Toy Robot Simulator</h1>
      <textarea
        rows="10"
        cols="30"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter commands here..."
      />
      <br />
      <button onClick={executeCommands}>Execute</button>
      <h3>Output:</h3>
      <p>{output}</p>
    </div>
  );
};

export default RobotController;
