import React from 'react';

const TodoList = ({ todos, onDeleteTodos }) => {
  return (
    <ul className={'todo__list'}>
      {todos.map(({ id, text }) => (
        <li key={id} className={'todo__item'}>
          <p className={'todo__text'}> {text} </p>
          <button
            type="button"
            className={'todo__btn'}
            onClick={() => onDeleteTodos(id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
