import React from 'react';
import styled from '@emotion/styled';

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

function TodoItems(props) {
  return (
    <Div>
      <ul>{props.children}</ul>
    </Div>
  );
}

export default TodoItems;
