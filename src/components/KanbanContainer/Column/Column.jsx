import React from 'react';
import classes from './Column.module.scss'
import Task from "./Task/Task";
import {Draggable, Droppable} from "react-beautiful-dnd";
import classNames from 'classnames'

const Column = ({column, tasks, index}) => {

  const tasksBlock = tasks.map((task, index) => {
    return <Task task={task} key={task.id} index={index}/>
  })

  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={column.id}>
            {
              (provided, snapshot) => (
                <div
                  className={classNames(classes.column, {[classes.isDraggingOver]: snapshot.isDraggingOver})}>
                  <h3>{column.title}</h3>
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={classes.tasks}
                  >
                    {tasksBlock}
                  </div>
                  {provided.placeholder}
                </div>
              )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
