import React from 'react';

const Suare = (props) => {
    return(
        
    <button
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>

    )
}

export default Suare;