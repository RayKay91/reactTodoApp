/** @jsx jsx */
// eslint-disable-next-line
import React, { useState } from 'react';
import styled from '@emotion/styled';

import { jsx, css } from '@emotion/core';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  @media (max-width: 600px) {
    width: 300px;
  }
  background-color: white;
  margin-bottom: 15px;
  border-radius: 3px;
  background-color: white;
  height: 30px;
`;

const styles = (isChecked) => css`
  list-style-type: none;
  padding-left: 7px;
  margin-right: auto;
  ${isChecked === true &&
  `
    text-decoration: line-through;
    `}
`;

const Button = styled.button`
  border: none;
  width: 25px;
  color: white;
  height: 30px;
  width: 30px;
  cursor: pointer;
  border-radius: ${(props) => (props.deleteButton ? '0 3px 3px 0' : 0)};
  font-weight: bold;
  background-color: ${(props) => (props.deleteButton ? 'red' : '#15cfbb')};

  &:focus {
    outline: none;
    border: none;
  }
`;

function Todo({ handleDelete, text }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = (e) => {
    handleDelete(e);
  };

  const handleChecked = () => {
    setIsChecked(!isChecked)
  };

  return (
    <Div>
      <li css={styles(isChecked)}>{text}</li>
      <Button onClick={handleChecked}>✓</Button>
      <Button deleteButton onClick={handleClick}>
        X
      </Button>
    </Div>
  );
}

export default Todo;
