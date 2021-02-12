import React, {useState} from 'react';
import {initialData} from "../../api/mock-api";
import Column from "./Column/Column";
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import classes from './KanbanContainer.module.scss'


const KanbanContainer = () => {

  const [state, setState] = useState(initialData)

  const columns = state.columnOrder.map((columnId, index) => {
    const column = state.columns[columnId]
    const tasks = column.taskIds.map(taskId => state.tasks[taskId])

    return <Column column={column} tasks={tasks} key={columnId} index={index}/>
  })

  const onDragEnd = (result) => {

    const {draggableId, source, destination, type} = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    if (type === 'column') {
      const newColumnArray = state.columnOrder.slice()
      newColumnArray.splice(source.index, 1)
      newColumnArray.splice(destination.index, 0, draggableId)

      setState({
        ...state,
        columnOrder: newColumnArray
      })

      return;
    }

    const start = state.columns[source.droppableId]
    const finish = state.columns[destination.droppableId]


    if (start === finish) {
      const newArrayIds = start.taskIds.slice()
      newArrayIds.splice(source.index, 1)
      newArrayIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        taskIds: newArrayIds
      }

      setState({
        ...state,
        columns: {
          ...state.columns,
          [start.id]: newColumn
        }
      })
      return;
    }

    const arrayIdsOldColumn = start.taskIds.slice()
    const arrayIdsNewColumn = finish.taskIds.slice()

    arrayIdsOldColumn.splice(source.index, 1)
    arrayIdsNewColumn.splice(destination.index, 0, draggableId)

    const updatedOldColumn = {
      ...start,
      taskIds: arrayIdsOldColumn
    }

    const updatedNewColumn = {
      ...finish,
      taskIds: arrayIdsNewColumn
    }


    setState({
      ...state,
      columns: {
        ...state.columns,
        [start.id]: updatedOldColumn,
        [finish.id]: updatedNewColumn,
      }
    })

  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-columns" type="column" direction={'horizontal'}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={classes.columnsContainer}>
            {columns}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default KanbanContainer;
