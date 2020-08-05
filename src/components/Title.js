import React from 'react';
import styled from '@emotion/styled';

const H1 = styled.h1`
  margin: 35px 0;
  text-align: center;
  padding: 5px;
  color: white;
`;

function Title({ text }) {
  return <H1>{text}</H1>;
}
export default Title;
