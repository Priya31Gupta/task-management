import './TaskOverview.scss';
import useTaskStore from '../../store/useTaskStore';

const TaskList = () => {
    const list = useTaskStore((state) => state.list);
    const increasePopulation = useTaskStore((state) => state.increasePopulation);
    return <div className="task-overview">

        <div className='flex flex-row gap-4 justify-center flex-wrap'>
            <input type="search" className="p-1.5 rounded-sm shadow-sm h-10 w-96 text-gray-500" />
            <button type='button' className='size-10 bg-white text-gray-500 rounded-sm' onClick={()=>{increasePopulation({
                name:'hi',
                id: 6,
                isComplete: false
            })}}>+</button>
        </div>
        {
            list.length > 0 && list.map((task)=> {
                return <div className='flex flex-row gap-4 justify-center flex-wrap my-1.5' key={task.id}>
                    <div className='p-1.5 bg-white rounded-sm shadow-sm h-full w-96 text-gray-500'>{task.name} </div>
                    <button type='button' className='bg-white text-gray-500 rounded-sm px-1 py-1'>{task.isCompleted ? 'Closed' : 'Open'}</button>
                </div>
            })
        }
    </div>
}

export default TaskList;