import React, {useState} from 'react';
import {initialData} from "../../api/mock-api";
import Column from "./Column/Column";
import {DragDropContext} from 'react-beautiful-dnd'



const KanbanContainer = () => {

  const [state, setState] = useState(initialData)

  const columns = state.columnOrder.map((columnId) => {
    const column = state.columns[columnId]
    const tasks = column.taskIds.map(taskId => state.tasks[taskId])

    return <Column column={column} tasks={tasks} key={columnId}/>
  })

  const onDragEnd = (result) => {

    const {draggableId, source, destination} = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const column = state.columns[source.droppableId]
    const newArrayIds = column.taskIds.slice()
    newArrayIds.splice(source.index, 1)
    newArrayIds.splice(destination.index, 0, draggableId)

    const newColumn = {
      ...column,
      taskIds: newArrayIds
    }

    setState({
      ...state,
      columns: {
        ...state.columns,
        [column.id]: newColumn
      }
    })
  }

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        {columns}
      </DragDropContext>
    </div>
  );
};

export default KanbanContainer;
