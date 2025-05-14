import React from "react";

const countryCityData = [
  {
    country: "India",
    cities: ["Mumbai", "Delhi", "Bangalore"],
  },
  {
    country: "USA",
    cities: ["New York", "Los Angeles", "Chicago"],
  },
  {
    country: "Canada",
    cities: ["Toronto", "Vancouver", "Montreal"],
  },
];

const DropDown = () => {
  const [selectedCountry, setSelectedCountry] = React.useState();
  const [city, setCity] = React.useState([]);

  const handleCountryChange = (e) => {
    const selected = e.target.value;
    setSelectedCountry(selected);

    const found = countryCityData.find((item) => item.country === selected);
    console.log(found);
    setCity(found ? found.cities : []);
  };
  return (
    <>
      <div>
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">--Select Country--</option>
          {countryCityData.map((item) => (
            <option>{item.country}</option>
          ))}
        </select>
      </div>
      <div>
        <select>
          <option value="">--Select City--</option>
          {city.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default DropDown;
