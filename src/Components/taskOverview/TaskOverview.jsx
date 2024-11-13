import './TaskOverview.scss';
import useTaskStore from '../../store/useTaskStore';
import { useState } from 'react';
import { TaskItem } from '../taskItem/TaskItem';

const TaskList = () => {
    const list = useTaskStore((state) => state.list);
    const increasePopulation = useTaskStore((state) => state.increasePopulation);
    const updateBears = useTaskStore((store) => store.updateBears);
    const filterList = useTaskStore((store) => store.filterList);
    const [task, setTask] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editingData ,setEditingData] = useState({});
    const [selectedValue, setSelectedValue] = useState('');
    const [filteredTasks, setFilteredTasks] = useState(list);

    const onAdd = (task) => {
        if (task.trim()) {
            increasePopulation({
                name: task,
                id: Math.random() * 10,
                isComplete: false
            });
            
        }
    }
    const handleAddTask = (event) => {
        event.preventDefault();
        !isEditing ? onAdd(task) : onEdit(task);
        setTask(''); 
    };

    const onEdit = (item) => {
        updateBears({...editingData, name: task });
        setIsEditing(false);
    }

    const handleTaskEdit = (task) => {
        setTask(task.name);
        setIsEditing(true);
        setEditingData(task);
    }

    const filterData = () => {
        if (selectedValue === 'Closed') {
            setFilteredTasks(list.filter((task) => task.isComplete)); // Show only completed tasks
        } else if (selectedValue === 'Open') {
            setFilteredTasks(list.filter((task) => !task.isComplete)); // Show only open tasks
        } else {
            setFilteredTasks(list); // Show all tasks if no filter is selected
        }

        filterList(filteredTasks)
console.log('✌️filteredTasks --->', filteredTasks);
    }
    return <div className="task-overview">

        <div className='flex flex-row gap-4 justify-center flex-wrap'>
            <input type="text" value={task} onChange={(e)=> setTask(e.target.value)}  className="p-1.5 rounded-sm shadow-sm h-10 w-96 text-gray-500" />
            <button 
                type='button' 
                className='size-30 bg-white text-gray-500 rounded-sm' 
                onClick={handleAddTask}>
                + Add
            </button>
            <select className='text-gray-500' value={selectedValue} onChange={(e) =>{ setSelectedValue(e.target.value);filterData()}}>
                <option value={"All"}>Select...</option>
                <option value={'Closed'}>Closed</option>
                <option value={'Open'}>Open</option>
            </select>
        </div>
        {
            list.length > 0 && list.map((task)=> {
                return <TaskItem task={task} handleTaskEdit={handleTaskEdit} key={task.id} filterData={filterData}/>
            })
        }
    </div>
}

export default TaskList;