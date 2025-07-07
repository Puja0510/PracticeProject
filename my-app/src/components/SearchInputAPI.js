import React from "react";
import axios from "axios";

const SearchInput = () => {
  const [data, setData] = React.useState([]);
  const [inputVal, setInputVal] = React.useState("");

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://autocomplete.clearbit.com/v1/companies/suggest?query=${inputVal}`
        );
        setData(response.data);
      } catch (e) {
        console.log("error", e);
        setData([]);
      }
    };
    getData();
  }, [inputVal]);

  const handleChange = (e) => {
    const target = e.target.value;
    setInputVal(target);
  };

  return (
    <div>
      Search Input
      <input type="text" value={inputVal} onChange={handleChange} />
      {data.map((item) => (
        <div>
          <div>{item.name}</div>
          <img src={item.logo} />
        </div>
      ))}
    </div>
  );
};

export default SearchInput;
