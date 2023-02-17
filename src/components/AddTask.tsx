import { AddTasks } from './types/types';

export const AddTask = ({addTask, setNewTask, newTask}: AddTasks) => 
(
        <div className='row'>
            <div className='col'>
            <input 
                className='form-control form-control-lg'
                value={newTask}
                onChange={ (e) => setNewTask(e.target.value)}
            />
            </div>
            <div className='col-auto'>
            <button
                onClick={addTask}
                className='btn btn-lg btn-success'>Add task</button>
            </div>
        </div>
)

