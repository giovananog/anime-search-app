import React, { useState, useEffect } from 'react';
import { getMultipleRandomAnime, filterSearch } from '../api-requests';
import MediaCard from "./Card"

function Cards(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      var newData;
      try {
        if(props.filter === 'categories'){
          newData = await filterSearch('categories', props.info);
        }else if (props.filter === 'text') {
          newData = await filterSearch('text', props.info);
        }else {
          newData = await getMultipleRandomAnime(12);
        }
        setData(newData);
      } catch (error) {
        console.error('Failed to fetch data:', error.message);
      }
    }

    fetchData();
  }, [props.filter, props.info]);

  return (
    <div className="all-cards">
    {data.map((anime, index) => (
      <MediaCard anime={anime} key={index} />
    ))}
  </div>
  );
}

export default Cards
