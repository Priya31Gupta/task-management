import useTaskStore from '../../store/useTaskStore';

export const TaskItem = ({task, handleTaskEdit,filterData}) => {

    const updateBears = useTaskStore((store) => store.updateBears);
    const deleteTask = useTaskStore((store) => store.deleteTask);

    const handleTaskComplete = (task) => {
        updateBears({...task, isComplete:!task.isComplete });
    };
    
    const handleTaskDelete = (task) => {
        deleteTask(task);
    }
    

    return <div className='flex flex-row gap-4 justify-center flex-wrap my-1.5' key={task.id}>

                <div className={`p-1.5 bg-white rounded-sm shadow-sm h-full w-96 text-gray-500 ${task.isComplete ? 'line-through':''}`}>{task?.name}</div>

                <button type='button' onClick={() =>handleTaskComplete(task)} className={`bg-white text-gray-500 rounded-sm px-1 py-1 `}>{task.isComplete ? 'Closed' : 'Open'}</button>

                <button type='button' onClick={() =>handleTaskEdit(task)} className={`bg-white text-gray-500 rounded-sm px-1 py-1 `}>{'Edit'}</button>

                <button type='button' onClick={() =>handleTaskDelete(task)} className={`bg-white text-gray-500 rounded-sm px-1 py-1 `}>{'Delete'}</button>
            </div>
}