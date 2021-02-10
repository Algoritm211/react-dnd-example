import React from 'react';
import classes from './Task.module.css'
import {Draggable} from "react-beautiful-dnd";

const Task = ({task, index}) => {

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={classes.task}>
          {task.title}
        </div>
      )}
    </Draggable>

  );
};

export default Task;
