import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import Card from '../card/Card';

export default function Data() {

  const [data, setData] = useState([]); 
  
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=csi7pgkRPZNykoP9R2XwLzilSE9N8OG5KysAcJi1")
   .then(response => {
     console.log("DATA:", response)
     setData(response.data);
    })
    .catch(error => {
      console.log("ERROR:", error)
    })
  }, [])

  return (
     <Card dataProps={data}></Card>
  )
}