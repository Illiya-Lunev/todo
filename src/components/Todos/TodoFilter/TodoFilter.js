import React from 'react';

const TodoFilter = ({ value, onChange }) => {
  return (
    <label>
      Фильтр <input type="text" onChange={onChange} value={value} />
    </label>
  );
};

export default TodoFilter;
