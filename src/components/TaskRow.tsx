import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './css/App.css';
import { TasksRow } from './types/types';
import { ToDoProps } from './types/types';

// type ToDoProps = {
//   id: number,
//   title: string,
//   status: boolean
// }

export const TaskRow = ({toDo, removeTask, markTask, setUpdateData}: TasksRow) => {
  return(
    <>
    {toDo && toDo.length ? '' : 'you do not have any task'}
    {toDo && toDo.sort((a: ToDoProps,b: ToDoProps) => a.id > b.id ? 1 : -1)
                  .map((task: ToDoProps, id : number) => (
                    <React.Fragment>
                      <div className='taskBg column'>
                        <div className={task.status ? 'finished' : ''}>
                          <span className='taskNum'>{id + 1}</span>
                          <span className='taskText'>{task.title}</span>
                        </div>
                        <div className='iconsWrap'>
                          <span title="Finished / Not Finished"
                                onClick={ () => markTask(id) }
                          >
                            <FontAwesomeIcon icon={faCircleCheck} />
                          </span>
                          {task.status ? null : (
                          <span title="Edit"
                                onClick={() => setUpdateData({
                                  id: task.id,
                                  title: task.title,
                                  status: task.status ? true : false
                                  })
                                }
                          >
                            <FontAwesomeIcon icon={faPen} />
                          </span>
                          )}
                          <span title="Delete"
                            onClick={() => removeTask(id)}  
                          > 
                            <FontAwesomeIcon icon={faTrashCan} />
                          </span>
                        </div>
                      </div>
                    </React.Fragment>
                    ))
    }
  </>
  )
}
