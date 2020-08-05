import React from 'react';
import styled from '@emotion/styled';

const P = styled.p`
  text-align: center;
  margin-bottom: 20px;
  color: white;
  font-size: 1.5rem;
`;

function ErrorMessage() {
  return <P>You must enter something to do!</P>;
}

export default ErrorMessage;
