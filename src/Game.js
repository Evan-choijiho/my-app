import React, { useReducer, useState, useEffect } from 'react';
import Board from './Board';
import TTTStore from './TTTStore';
import Header from './Header';

const Game = (props) => {

    return (
        <TTTStore>
            <Header />
            <div className="game">
                <div className="game-board">
                    <Board
                    />
                </div>
                <div className="game-info">
                    <div>History</div>
                </div>
            </div>

        </TTTStore>
    );
}

export default Game;