import React from "react";


const data = [
    { id: 1, value: "" },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
  ];

const GridDesign = () => {
    return (
        <div style={style.wrapper}>
        <div style={style.grid}>
            {data.map((item) => (
                <div 
                    key={item.index} 
                    style={{ ...style.cell, backgroundColor: item.value === "" ? 'white' : 'blue'}}>
                        {item.value === "" ? "Empty" : item.value}
                </div>
            ))}
        </div>
        </div>
    )
}

export default GridDesign;

const style = {
    wrapper: {
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center"
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "10px",
      padding: "10px",
    },
    cell: {
      padding: "20px",
      textAlign: "center",
      borderRadius: "5px",
    },
  };