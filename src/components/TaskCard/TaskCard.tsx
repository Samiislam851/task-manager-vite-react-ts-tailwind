import React from 'react';
import { MdDeleteOutline, MdEdit, MdOutlineDone } from 'react-icons/md';
interface taskType {
    id: number,
    task: string,
    dateAndTime: Date,
    isDone: boolean,

}

interface props {
    taskData: taskType,
    handleDeleteTask: (id: number) => void
    tasks: taskType[]
    setTasks: React.Dispatch<React.SetStateAction<taskType[]>>
}


const TaskCard = ({ taskData, handleDeleteTask, tasks, setTasks }: props) => {
    const { id, task, dateAndTime, isDone } = taskData;

    const formattedDate = dateAndTime.toLocaleDateString();
    const formattedTime = dateAndTime.toLocaleTimeString();


    const handleDone = (id: number) => {


        ////////////////////// Implementation 1 /////////////////////
        // const index = tasks.findIndex(task => task.id === id)

        // const theTask = tasks.find(task => task.id === id)

        // if (!theTask) return;
        // const tasksTemp = [...tasks]
        // let temp: taskType = { ...theTask, isDone: !isDone }
        // tasksTemp[index] = temp
        // setTasks([...tasksTemp])


        ////////////////////// Implementation 2 /////////////////////
        
        setTasks(tasks.map(task => task.id === id ? { ...task, isDone: !isDone } : task))


    }



    return (
        <div className='flex gap-5 justify-around items-center hover:shadow-xl transition-all duration-300 ease-in-out p-3 bg-gray-100 rounded-lg my-2 mx-3 text-gray-500 '>
            <div className='basis-1/3'>
                <div className='border overflow-hidden w-full h-[30px] hover:h-fit transition-all ease-in-out duration-300 p-1 basis-1/3 '
                >
                    {isDone ? <s>{task}</s> : <span>{task}</span>}
                </div>
            </div>

            <div className='basis-1/3'>
                <div className='text-xs md:text-sm text-center '>{formattedDate} {formattedTime}</div>
            </div>

            <div className='basis-1/3 text-center'>
                <div className='flex justify-center gap-2'>
                    <button title='Edit' className='p-1 px-2 text-white text-base rounded-md hover:scale-105 transition-all duration-300 ease-in-out bg-green-600' >
                        <MdEdit />
                    </button>
                    <button onClick={() => handleDone(id)} title='Done' className='p-1 px-2 text-white text-base rounded-md hover:scale-105 transition-all duration-300 ease-in-out bg-blue-600' >
                        <MdOutlineDone />
                    </button>
                    <button title='Delete' onClick={() => handleDeleteTask(id)} className='p-1 px-2 text-white text-base rounded-md hover:scale-105 transition-all duration-300 ease-in-out bg-red-600'>
                        <MdDeleteOutline />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default TaskCard;