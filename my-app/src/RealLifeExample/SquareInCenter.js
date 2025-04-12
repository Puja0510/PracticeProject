import React from "react";

const SquareInCenter = () => {
    const [showBox, setShowBox] = React.useState(false)
    const [squareBox, setSquareBox] = React.useState([])
    const [count, setCount] = React.useState()

    const squareClick = () => {
        setCount(prev => prev + 1)
        setSquareBox((prev) => [...prev, count]);
    }

    return(
        <div style={style.wrapper}>
            <div style={style.square} onClick={squareClick}>
                {squareBox.map((box) => (<div style={style.square}></div>))}
            </div>
        </div>
    )
}

export default SquareInCenter;

const style = {
    wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "row"
    },
    square: {
        height: "100px",
        width: "100px",
        border: '1px solid black',
    },
}