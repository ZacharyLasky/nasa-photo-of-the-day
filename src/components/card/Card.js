import React from 'react';
import styled from 'styled-components';

const TitleDiv = styled.div`display: flex; justify-content: center;`;
const DateDiv = styled.div`display: flex; justify-content: center;`;

export default function Card(props) {
  const data = props.dataProps;
    return (
      <div className="card-container">
        
        <TitleDiv>
          <h1>{data.title}</h1>
        </TitleDiv>

        <DateDiv>
          <h2>{data.date}</h2>
        </DateDiv>

        <div className="img-container">
          <img src={data.url} alt="nasa image of the day"></img>
        </div>
          
        <div className="explanation-container">
          <h3>{data.explanation}</h3>
        </div>
      
      </div>
    )
  }