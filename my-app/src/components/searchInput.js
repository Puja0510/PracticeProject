import React from "react";

const Parent = () => {
  const [value, setValue] = React.useState();
  const [filteredItem, setFilterItem] = React.useState([]);

  const city = ["Banglore", "Chennai", "Patna", "Pondi"];

  const handleChange = (e) => {
    setValue(e.target.value);
    const inputValue = e.target.value;
    let filterData = city.filter((item) => item.startsWith(inputValue));
    setFilterItem(filterData);
  };
  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
      {filteredItem.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </>
  );
};
export default Parent;
