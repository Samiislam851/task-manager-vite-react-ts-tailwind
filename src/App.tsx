import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputField from './components/InputField/InputField'

function App() {
  interface taskType {
    task: string,
    dateAndTime: number,
    isDone: boolean
  }

  const [taskText, setTaskText] = useState<string>('')
  const [tasks, setTasks] = useState<taskType[]>([])


  return (
    <div className="font-saira bg-[#2f74c0] text-white py-10 min-h-[100vh]">

      <h1 className="text-3xl text-center font-medium pt-10">
        Taskify <span className='text-base '>By Siam</span>
      </h1>


      <InputField taskText={taskText} setTaskText={setTaskText} />
    </div>
  )
}

export default App
