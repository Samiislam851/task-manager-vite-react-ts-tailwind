import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputField from './components/InputField/InputField'

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
      let temp : taskType []  = [...tasks, {task: taskText, dateAndTime: new Date(), isDone: false } ]
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

      {tasks.map((task :taskType ,i:number) =><li>{task.task}</li>)}
    </div>
  )
}

export default App
