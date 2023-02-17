export type ToDoProps = {
  id: number,
  title: string,
  status: boolean
}

export type AddTasks = {
  addTask: () => void,
  setNewTask: (arg:string) => void,
  newTask: string
}

export type TasksRow = {
  toDo: ToDoProps[],
  removeTask: (id:number) => void,
  markTask: (id:number) => void
  setUpdateData: (arg: ToDoProps) => void
}

export type Test = {
  ToDoProps: ToDoProps,
  TasksRow: TasksRow
}

export type UpdateTaskProps = {
  changeTask: (e: React.ChangeEvent<HTMLInputElement>) => void,
  updateTask: () => void
  updateData: ToDoProps,
  cancelUpdate: () => void
}