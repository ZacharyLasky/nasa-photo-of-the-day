import React from 'react';
import styled from 'styled-components';

import Button from './Button';

// STYLES
const CardContainerDiv = styled.div`margin: 20px 200px 20px 200px;`;
const TitleDiv = styled.div`display: flex; justify-content: center; background: #F7E796;`;
const TitleH1 = styled.h1`color: #bae123`;

const DateDiv = styled.div`display: flex; justify-content: center;`;

const ImgDiv = styled.div`display: flex; justify-content: center;`;

const ExplanationDiv = styled.div`display: flex; flex-direction: column; align-items: center;`;
// const ExplanationButton = styled.button`width: 200px; font-size: 20px`;

export default function Card(props) {
  const data = props.dataProps;
    return (
      <CardContainerDiv>
        
        <TitleDiv>
          <TitleH1>{data.title}</TitleH1>
        </TitleDiv>

        <DateDiv>
          <h2>{data.date}</h2>
        </DateDiv>

        <ImgDiv>
          <img src={data.url} alt="nasa daily"></img>
        </ImgDiv>
          
        <ExplanationDiv>
          <h3>{data.explanation}</h3>
          <Button type="primary">nasa.gov</Button>
        </ExplanationDiv>
      
      </CardContainerDiv>
    )
  }