import React from 'react';

function Todo({ text, handleDelete }) {
  const handleClick = (e) => {
    handleDelete(e);
  };

  const styles = {
    display: 'flex',
  };

  return (
    <div style={styles}>
      <li>{text}</li>
      <button onClick={handleClick}>X</button>
    </div>
  );
}

export default Todo;
