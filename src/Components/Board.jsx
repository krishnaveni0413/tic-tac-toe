
import { useState } from "react"
import Square from "./Square"
const Board = () => {
    const [squares, setsquares] = useState(Array(9).fill(null))
    const [xisNext, setxisNext] = useState(true)


    let handlebutton = (i) => {
        if (squares[i] || calculatewinner(squares)) {
            return
        }
        const nextsquare = squares.slice()
        if (xisNext) {
            nextsquare[i] = "X"
        } else {
            nextsquare[i] = "O"
        }
        setsquares(nextsquare)
        setxisNext(!xisNext)

    }
    function calculatewinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const winner = calculatewinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xisNext ? "X" : "O");
    }

    const handlereset = () => {
        setsquares(Array(9).fill(null)); 
        setxisNext(true);               
    };


    return (
        <div className='container'>
            <h1 className="title">Tic tac to gameIn <span>React</span></h1>
            <div className="status">{status}</div>
            <div className="boards">
                <div className="row1">
                    <Square value={squares[0]} handlebutton={() => handlebutton(0)} />
                    <Square value={squares[1]} handlebutton={() => handlebutton(1)} />
                    <Square value={squares[2]} handlebutton={() => handlebutton(2)} />
                </div>
                <div className="row1">
                    <Square value={squares[3]} handlebutton={() => handlebutton(3)} />
                    <Square value={squares[4]} handlebutton={() => handlebutton(4)} />
                    <Square value={squares[5]} handlebutton={() => handlebutton(5)} />
                </div>
                <div className="row1">
                    <Square value={squares[6]} handlebutton={() => handlebutton(6)} />
                    <Square value={squares[7]} handlebutton={() => handlebutton(7)} />
                    <Square value={squares[8]} handlebutton={() => handlebutton(8)} />
                </div>

            </div>
            <button className='reset' onClick={handlereset}>Reset</button>


        </div>
    )
}

export default Board