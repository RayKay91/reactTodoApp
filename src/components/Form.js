import React from 'react';
import styled from '@emotion/styled';

const Input = styled.input`
  height: 35px;
  width: 400px;
  border-radius: 4px;
  border: 0.5px solid rgb(100, 100, 100);
  padding-left: 5px;
  border: none;
  @media (max-width: 600px) {
    width: 200px;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2pt rgb(96, 0, 255);
    border: none;
  }
  &::placeholder {
    color: rgb(175, 175, 175);
  }
`;

const Button = styled.button`
  height: 35px;
  padding: 5px 15px;
  margin-left: 25px;
  background-color: #15cfbb;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  &:focus {
    outline: none;
    border: none;
  }
  &:hover {
    background-color: white;
    color: #15cfbb;
  }
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
`;

function Form({ onSubmit, onChange, value }) {
  return (
    <Div>
      <form onSubmit={onSubmit}>
        <Input
          placeholder="Enter your to-do here..."
          type="text"
          value={value}
          onChange={onChange}
        />
        <Button>Add To-Do</Button>
      </form>
    </Div>
  );
}

export default Form;
