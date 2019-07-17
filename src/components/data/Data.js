import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Data(props) {

  const [data, setData] = useState([]); 
  
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14")
   .then(response => {
     console.log("DATA:", response)
     setData(response.data);
    })
    .catch(error => {
      console.log("ERROR:", error)
    })
  }, [])

  return (
     <div>
      <div>{data.title}</div>
      <img src={data.url} alt="nasa of the day"></img>
      <div>{data.explanation}</div>
      <div>{data.date}</div>
      <div>{data.copyright}</div>
    </div>
  )
}