import React, { useContext } from 'react';
import { GameContext } from './TTTStore';

const Suare = (props) => {
  const {dispatch} = useContext(GameContext);
  const handleOnClick = () => {
    dispatch({ type: 'SQUARE_CLICK', payload: props.idx });
  }

  return (
    <button
      className="square"
      onClick={handleOnClick}
    >
      {props.value}
    </button>

  )
}

export default Suare;