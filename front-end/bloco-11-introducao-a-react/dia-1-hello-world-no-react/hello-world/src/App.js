import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const ThingsToDo = ['Acordar', 'Tomar café', 'Ligar o PC', 'Almoçar', 'Aula na Trybe'];

class EveryDayTasks extends React.Component {
  render() {
    return (
      <ul>
        {ThingsToDo.map(thing => Task(thing))}
      </ul>
    )
  }
}

export default EveryDayTasks;
