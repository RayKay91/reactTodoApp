import React from 'react';

function TodoItems(props) {
  return (
    <div>
      <ul>{props.children}</ul>
    </div>
  );
}

export default TodoItems;
