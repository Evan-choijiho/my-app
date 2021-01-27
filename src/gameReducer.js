export const gameReducer = (state, { type, payload }) => {
    switch (type) {
        case 'SQUARE_CLICK':
            return Object.assign({}, state, {
                squares: state.squares.map((suqare, id) => {
                    if (id == payload) {
                        const squareValue = state.xIsNext ? 'X' : 'O';
                        return squareValue;
                    } else {
                        return state.squares[id];
                    }
                }),
                xIsNext:  !state.xIsNext,
            });
        case '':
            return '';
        default:
            throw new Error();
    }
}