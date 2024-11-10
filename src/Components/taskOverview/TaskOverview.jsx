import './TaskOverview.scss';
import useTaskStore from '../../store/useTaskStore';
import { useState,useEffect } from 'react';

const TaskList = () => {
    const list = useTaskStore((state) => state.list);
    const increasePopulation = useTaskStore((state) => state.increasePopulation);
    const updateBears = useTaskStore((store) => store.updateBears)
    const [task, setTask] = useState('');
    const handleAddTask = (event) => {
        if (task.trim()) { // Ensure the task is not empty
            event.preventDefault();
            increasePopulation({
                name: task,
                id: Math.random() * 10,
                isComplete: false
            });
            setTask(''); // Clear the input
        } else {
            console.log('Task is empty, not adding.');
        }
    };

    const handleTaskComplete = (task) => {
console.log('✌️task --->', task);
        updateBears({...task, isComplete:!task.isComplete });
    };
    
    return <div className="task-overview">

        <div className='flex flex-row gap-4 justify-center flex-wrap'>
            <input type="text" onChange={(e)=> setTask(e.target.value)}  className="p-1.5 rounded-sm shadow-sm h-10 w-96 text-gray-500" />
            <button 
                type='button' 
                className='size-10 bg-white text-gray-500 rounded-sm' 
                onClick={handleAddTask}>
                +
            </button>
        </div>
        {
            list.length > 0 && list.map((task)=> {
                return <div className='flex flex-row gap-4 justify-center flex-wrap my-1.5' key={task.id}>
                    <div className={`p-1.5 bg-white rounded-sm shadow-sm h-full w-96 text-gray-500 ${task.isCompleted ? 'line-through':''}`}>{task.name} </div>
                    <button type='button' onClick={() =>handleTaskComplete(task)} className='bg-white text-gray-500 rounded-sm px-1 py-1'>{task.isCompleted ? 'Closed' : 'Open'}</button>
                </div>
            })
        }
    </div>
}

export default TaskList;