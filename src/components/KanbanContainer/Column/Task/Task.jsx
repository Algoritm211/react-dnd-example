import React from 'react';
import classes from './Task.module.scss'
import {Draggable} from "react-beautiful-dnd";
import classNames from 'classnames'

const Task = ({task, index}) => {

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            className={classNames(classes.task, {
              [classes.isDragging]: snapshot.isDragging,
            })}>
            <div className={classes.handle} {...provided.dragHandleProps}></div>
            {task.title}
          </div>
        )
      }

        }
    </Draggable>

  );
};

export default Task;
