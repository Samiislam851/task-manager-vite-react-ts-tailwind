import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputField from './components/InputField/InputField'
import TaskCard from './components/TaskCard/TaskCard'

function App() {
  interface taskType {
    task: string,
    dateAndTime: Date,
    isDone: boolean
  }

  const [taskText, setTaskText] = useState<string>('')
  const [tasks, setTasks] = useState<taskType[]>([])

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(taskText, tasks);
    if (taskText) {
      let temp: taskType[] = [...tasks, { task: taskText, dateAndTime: new Date(), isDone: false }]
      setTasks(temp)
      setTaskText('')
    }
  }

  return (
    <div className="font-saira bg-[#2f74c0] text-white py-10 min-h-[100vh]">

      <h1 className="text-3xl text-center font-medium pt-10">
        Taskify <span className='text-base '>By Siam</span>
      </h1>


      <InputField taskText={taskText} handleAddTask={handleAddTask} setTaskText={setTaskText} />
      <div className='flex flex-col md:flex-row px-10'>
        <div className='basis-1/2'>
          <h3 className='py-2 text-center text-xl'>{tasks[0]&&'To Do :'} </h3>
          {tasks.map((taskData: taskType, i: number) => <TaskCard key={i} taskData={taskData} />)}
        </div>
        <div className='basis-1/2'>
          <h3 className='py-2 text-center text-xl'>{tasks[0]&&'Done :'} </h3>
          {tasks.map((taskData: taskType, i: number) => <TaskCard key={i} taskData={taskData} />)}
        </div>
      </div>


    </div>
  )
}

export default App
