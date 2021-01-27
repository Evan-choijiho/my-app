import React, { useReducer, useState, useEffect } from 'react';

import { calculateWinner, test } from './Util';
import { gameReducer } from './gameReducer.js';
export const GameContext = React.createContext();

const TTTStore = (props) => {
    const initialState = {
        squares:Array(9).fill(null),
        xIsNext:true,
    };
    const [state, dispatch] = useReducer(gameReducer, initialState);
    const [status, setStatus] = useState('');

    useEffect(() => {
        let winner = calculateWinner(state.squares);
        if (winner == null) {
            setStatus('Next player: ' + (state.xIsNext ? 'X' : 'O'));
        } else {
            setStatus('Winner: ' + winner);
        }
    }, [state]);

    return (
        <GameContext.Provider value={{ state, status, dispatch}}>
            {props.children}
        </GameContext.Provider>
    );
};

export default TTTStore;