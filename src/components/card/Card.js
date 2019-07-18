import React from 'react';

export default function Card(props) {
  const data = props.dataProps;
    return (
      <div>
        <div>{data.title}</div>
        <img src={data.url} alt="nasa image of the day"></img>
        <div>{data.explanation}</div>
        <div>{data.date}</div>
        <div>{data.copyright}</div>
      </div>
  )
}