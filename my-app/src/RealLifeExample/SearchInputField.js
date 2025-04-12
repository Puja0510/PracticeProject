import React from "react";
import {ContentHolder, InputDiv, ListItem, Lists} from './skins';
import axios from "axios";

const cityList = [
    {id: 1, city: 'Patna'},
    {id: 2, city: 'Ranchi'},
    {id: 3, city: 'Raipur'}, 
    {id: 4, city: 'Pondicherry'},
    {id: 6, city: 'Banglore'},
    {id: 7, city: 'Bengal'},
    {id: 8, city: 'Pataya'},
    {id: 9, city: 'Latehar'},
    {id: 10, city: 'Pune'}
]
const SearchInputField = () => {
    const [filterItem, setFilterItem] = React.useState([]);
    const [value, setValue] = React.useState('');
    const [data, setData] = React.useState([]);
    // const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        getData()
    },[])

    React.useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (value === '') {
                setFilterItem([]);
              } else {
                const filteredData = cityList
                  .map((item) => item.city)
                  .filter((item) => item.toLowerCase().startsWith(value?.toLowerCase()));
                setFilterItem(filteredData);
                // getData();
              }
        }, 3000)
        return () => {
            clearTimeout(delayDebounce)
        }
    },[value])

    const getData = async() => {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setData(response.data)
        }
        catch(e){
            console.log(e.message)
            setError(e.message)
        }
        finally {
            // setLoading(false)
        }
    }

    const handleChange = (e) => {
        const target = e.target.value?.toLowerCase();
        setValue(target)
        // const filteredData = cityList.map((item) => item.city).filter((item) => item.toLowerCase().startsWith(target))
        // if(target === ''){
        //     setFilterItem([])
        //     return;
        // }
        // setFilterItem(filteredData)
    }


    // if(loading) return <>Loading.......</>
    if(error) return <>{error}</>
    return (
        <ContentHolder>
            <InputDiv placeholder="Enter City" value={value} onChange={handleChange}/>
            {filterItem.map((item, index) => (
                <ListItem><Lists>{item}</Lists></ListItem>
            ))}
             {/* Just to use fetched data */}
      {data.slice(0, 1).map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
        </ContentHolder>
    )
}

export default SearchInputField;