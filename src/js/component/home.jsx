import React from 'react';
import TodoList from './TodoList.jsx';

const Home = () => {
  return (
    <div>
      <h1>Tareas</h1>
	  <div className="container">
      <TodoList />
    </div>
	</div>
  );
};

export default Home;
