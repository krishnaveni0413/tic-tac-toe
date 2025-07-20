import { useState } from "react"

const Square=({value, handlebutton})=>{

    

    return(
        <div className="box" onClick={handlebutton}>{value}</div>
    )
}

export default Square