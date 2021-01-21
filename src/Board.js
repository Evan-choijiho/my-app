import React from 'react';
import Square from './Suare';
import { GameContext } from './Game.js';

const Board = () => {
    const renderSquare = (i, squares, handleClick) => {
        return (
            <Square
                value={squares[i]}
                onClick={() => handleClick(i)}
            />
        )
    }

    return (
        <GameContext.Consumer>
            {
                ({ squares, handleClick }) => (
                    <>
                        <div className="board-row">
                            {renderSquare(0, squares, handleClick)}
                            {renderSquare(1, squares, handleClick)}
                            {renderSquare(2, squares, handleClick)}
                        </div>
                        <div className="board-row">
                            {renderSquare(3, squares, handleClick)}
                            {renderSquare(4, squares, handleClick)}
                            {renderSquare(5, squares, handleClick)}
                        </div>
                        <div className="board-row">
                            {renderSquare(6, squares, handleClick)}
                            {renderSquare(7, squares, handleClick)}
                            {renderSquare(8, squares, handleClick)}
                        </div>
                    </>

                )
            }
        </GameContext.Consumer>
    );
}

export default Board;