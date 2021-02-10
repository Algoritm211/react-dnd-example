export const initialData = {
  tasks: {
    task_1: {id: 'task_1', title: 'Make React app'},
    task_2: {id: 'task_2', title: 'Make Cake'},
    task_3: {id: 'task_3', title: 'Make News'},
    task_4: {id: 'task_4', title: 'Write CV'},
    task_5: {id: 'task_5', title: 'Have a JavaScript lesson'},
  },
  columns: {
    column_1: {
      id: 'column_1',
      title: 'Active',
      taskIds: ['task_1', 'task_2', 'task_3', 'task_4', 'task_5']
    }
  },
  columnOrder: ['column_1']
}
