import React, {useContext} from 'react';
import Square from './Suare';
import { GameContext } from './TTTStore';

const Board = () => {

    const renderSquare = (i, squares ) => {
        return (
            <Square
                idx={i}
                value={squares[i]}
            />
        )
    }

    return (
        <GameContext.Consumer>
            {
                ({ state }) => (
                    <>
                        <div className="board-row">
                            {renderSquare(0, state.squares)}
                            {renderSquare(1, state.squares)}
                            {renderSquare(2, state.squares)}
                        </div>
                        <div className="board-row">
                            {renderSquare(3, state.squares)}
                            {renderSquare(4, state.squares)}
                            {renderSquare(5, state.squares)}
                        </div>
                        <div className="board-row">
                            {renderSquare(6, state.squares)}
                            {renderSquare(7, state.squares)}
                            {renderSquare(8, state.squares)}
                        </div>
                    </>

                )
            }
        </GameContext.Consumer>
    );
}

export default Board;