// import styled from 'styled-components';
import { Board } from "./Board";
import './App.css';

export const Game = () => {
    return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
};