import React from 'react';
import styled from 'styled-components';

const TitleDiv = styled.div`display: flex; justify-content: center;`;
const DateDiv = styled.div`display: flex; justify-content: center;`;
const ImgDiv = styled.div`display: flex; justify-content: center;`;
const ExplanationDiv = styled.div`display: flex; justify-content: center;`;

const LimeH1 = styled.h1`color: #bae123`;


export default function Card(props) {
  const data = props.dataProps;
    return (
      <div className="card-container">
        
        <TitleDiv>
          <LimeH1>{data.title}</LimeH1>
        </TitleDiv>

        <DateDiv>
          <h2>{data.date}</h2>
        </DateDiv>

        <ImgDiv>
          <img src={data.url} alt="nasa image of the day"></img>
        </ImgDiv>
          
        <ExplanationDiv>
          <h3>{data.explanation}</h3>
        </ExplanationDiv>
      
      </div>
    )
  }