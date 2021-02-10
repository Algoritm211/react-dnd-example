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
    //TODO Make on drag end logic
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
