import React from 'react';
import styled from 'styled-components';

import Button from './Button';

// STYLES
const CardContainerDiv = styled.div`margin: 20px 200px 0px 200px;`;
const TitleDiv = styled.div`display: flex; justify-content: center; background: #6BB35D;`;
const TitleH1 = styled.h1`color: #bae123`;

const DateDiv = styled.div`display: flex; justify-content: center; background: #5A924F`;

const ImgDiv = styled.div`display: flex; justify-content: center;`;

const ExplanationDiv = styled.div`display: flex; flex-direction: column; align-items: center; background-image: linear-gradient(#6BB35D, yellow)`;
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
          <img src={data.url} alt="nasa daily" width="100%"></img>
        </ImgDiv>
          
        <ExplanationDiv>
          <h3>{data.explanation}</h3>
          <Button type="primary">nasa.gov</Button>
        </ExplanationDiv>
      
      </CardContainerDiv>
    )
  }