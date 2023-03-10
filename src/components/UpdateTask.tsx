import { UpdateTaskProps } from './types/types';

export const UpdateTask = ({changeTask, updateTask, updateData, cancelUpdate}: UpdateTaskProps) => (  
    <div className='row'>
        <div className='col'>
        <input
            value={ updateData && updateData.title }
            onChange = {(e) => changeTask(e)}
            className='form-control form-control-lg'
        />
        </div>
        <div className='col-auto'>
        <button 
            onClick={ updateTask }
            className='btn btn-lg btn-success margin-20'
            >Update task</button>
        <button
            onClick={ cancelUpdate } 
            className='btn btn-lg btn-warning'>Cancel</button>
        </div>
  </div>
)