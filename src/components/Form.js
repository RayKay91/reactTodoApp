import React from 'react';

function Form({ onSubmit, onChange, value }) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange} />
        <input type="submit" />
      </form>
    </>
  );
}

export default Form;
