import React from 'react';
interface taskType {
    task: string,
    dateAndTime: Date,
    isDone: boolean
}
const TaskCard = ({ taskData }: { taskData: taskType }) => {
    const { task, dateAndTime, isDone } = taskData;
    console.log(task, dateAndTime, isDone);

    return (
        <div className='flex justify-around hover:shadow-xl transition-all duration-300 ease-in-out p-3 bg-gray-100 rounded-lg my-2 mx-3 text-gray-500 '>
            <div>{task}</div>
            <div>{isDone?'Done':'Not Done'}</div>
            <div><button className='p-1 px-3 text-white text-base rounded-xl hover:scale-105 transition-all duration-300 ease-in-out bg-red-600'>Delete</button></div>
        </div>
    );
};

export default TaskCard;