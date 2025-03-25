import React from "react";

const MouseTracker = ({render}) => {

    const [position, setPosition] = React.useState({x: 0, y: 0})

    const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY})
    }
    return <div onMouseMove={handleMouseMove}>{render(position)}</div>;

}

export default MouseTracker;