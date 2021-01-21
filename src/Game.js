import React, { useState, useEffect } from 'react';
import Board from './Board';

export const GameContext = React.createContext();

const Game = (props) => {

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {

            const a = squares[lines[i][0]];
            const b = squares[lines[i][1]];
            const c = squares[lines[i][2]];
            if (a == b && a == c && b == c) {
                return a;
            }
        }
        return null;
    }
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [status, setStatus] = useState('');

    const handleClick = (i) => {
        squares[i] = xIsNext ? "X" : "O";
        setSquares(squares);
        setXIsNext(!xIsNext);
    }

    useEffect(() => {
        let winner = calculateWinner(squares);
        if (winner == null) {
            setStatus('Next player: ' + (xIsNext ? 'X' : 'O'));
        } else {
            setStatus('Winner: ' + winner);
        }
    }, [xIsNext]);


    return (
        <GameContext.Provider value={{ squares, handleClick }}>
            <div className="header">
                <p>{status}</p>
            </div>
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={squares}
                        onClick={(i) => handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>상태</div>
                </div>
            </div>
        </GameContext.Provider>
    );
}

export default Game;