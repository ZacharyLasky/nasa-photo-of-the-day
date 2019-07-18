import React from 'react';
import styled from 'styled-components';

const Button = styled.button`padding: 6px 10px; margin: 5px; border: 1px solid black; border-radius: 10px; width: 200px; font-size: 30px; font-family: times; color: black; 
${props => (props.type === "primary" ? `background: #bae123` : null)}`;

export default Button;