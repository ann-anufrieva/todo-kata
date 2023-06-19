import React, { useState } from 'react';
import './NewTaskForm.css';

const NewTaskForm = ({ saveTodo }) => {
  const [label, setLabel] = useState('');
  const [id, setId] = useState(100);

  const submitHandler = (event) => {
    event.preventDefault();
    saveTodo({ id, label });
    setId(id + 1);
    setLabel('');
  };

  return (
    <form className={'new-todo-form'} onSubmit={submitHandler}>
      <input className="new-todo" placeholder="What needs to be done?" onChange={(e) => setLabel(e.target.value)} value={label} />
    </form>
  );
};

export default NewTaskForm;
