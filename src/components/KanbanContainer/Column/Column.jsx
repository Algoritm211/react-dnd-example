import React from 'react';
import classes from './Column.module.scss'
import Task from "./Task/Task";
import {Droppable} from "react-beautiful-dnd";

const Column = ({column, tasks}) => {

  const tasksBlock = tasks.map((task, index) => {
    return <Task task={task} key={task.id} index={index}/>
  })

  return (
    <Droppable droppableId={column.id}>
      {
        (provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={classes.column}>
            <h3>{column.title}</h3>
            <div className={classes.tasks}>
              {tasksBlock}
            </div>
            {provided.placeholder}
          </div>
        )
      }
    </Droppable>

  );
};

export default Column;
