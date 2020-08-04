import React from 'react';

function Todo({ text }) {
  const handleClick = (e) => e.target.parentNode.remove();
  const handleCompletedClick = (e) =>
    (e.target.style.textDecoration = 'line-through');

  const styles = {
    display: 'flex',
  };

  return (
    <div style={styles}>
      <li onClick={handleCompletedClick}>{text}</li>
      <button onClick={handleClick}>X</button>
    </div>
  );
}

export default Todo;
