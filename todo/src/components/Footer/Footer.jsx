import React, { useEffect, useState } from 'react';

import './Footer.css';

import TaskFilter from '../TaskFilter/TaskFilter';

const Footer = (props) => {
  const { changeFilter, tasks, onClearActive } = props;

  const [todoCount, setTodoCount] = useState(0);

  useEffect(() => {
    const count = tasks.filter((el) => !el.completed).length;

    setTodoCount(count);
  }, [tasks]);

  return (
    <footer className="footer">
      <span className="todo-count">{todoCount} items left</span>

      <TaskFilter changeFilter={changeFilter} />

      <button className="clear-completed" onClick={onClearActive}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;