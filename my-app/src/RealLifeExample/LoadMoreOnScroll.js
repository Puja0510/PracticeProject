import React from "react";
import {ContentHolder,  ListItem} from './skins';
import { FixedSizeList as List } from "react-window";
import axios from 'axios';

const LoadMoreOnScroll = () => {
    const [data, setData] = React.useState([]);
    const [visibleCount, setVisibleCount] = React.useState(10);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    const getData = async() => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setData(response.data)
        }
        catch(e){
            setError(e.message || "unknown error occured")
        }
        finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {
        getData();
      }, []);

      const onScroll = ({ scrollOffset, scrollDirection }) => {
        if (
          scrollDirection === "forward" &&
          scrollOffset > 0 &&
          visibleCount < data.length
        ) {
          setVisibleCount((prev) => Math.min(prev + 10, data.length));
        }
      };

      const Row = ({ index, style }) => {
        console.log("hhh", data[index])
        const item = data[index];
        return (
          <div style={style}>
            <ListItem>{item?.title}</ListItem>
          </div>
        );
      };
    
      if (loading) return <>Loading...</>;
      if (error) return <>{error}</>;

    return (
        <ContentHolder display="flex" jc='center' ai='center'>
            <List
                height={400}
                itemCount={visibleCount}
                itemSize={40}
                width={"80%"}
                onScroll={onScroll}
            >
                {Row}
            </List>
        </ContentHolder>
    )
}

export default LoadMoreOnScroll;