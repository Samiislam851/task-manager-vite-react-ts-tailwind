import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputField from './components/InputField/InputField'
import TaskCard from './components/TaskCard/TaskCard'

function App() {
  interface taskType {
    id: number,
    task: string,
    dateAndTime: Date,
    isDone: boolean
  }


  function generateUniqueId(objectsArray: taskType[]) {
    let id: number;
    do {
      // Generate a random number and convert it to a hexadecimal string
      id = Math.floor(Math.random() * 10000)
      // Check if the generated ID already exists in any object's ID
    } while (objectsArray.some(obj => obj.id === id));
    return id;
  }




  const [taskText, setTaskText] = useState<string>('')
  const [tasks, setTasks] = useState<taskType[]>([])



  ////////////////////////// functionalities ///////////////
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault()

    if (taskText) {
      let generatedId = generateUniqueId(tasks)

      let temp: taskType[] = [...tasks, { id: generatedId, task: taskText, dateAndTime: new Date(), isDone: false }]
      setTasks(temp)
      setTaskText('')
    }
  }


  const handleDeleteTask = (id: number) => {


    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }


  return (
    <div className="font-saira bg-[#2f74c0] text-white py-10 min-h-[100vh]">

      <h1 className="text-3xl text-center font-medium pt-10">
        Taskify <span className='text-base '>By Siam</span>
      </h1>


      <InputField taskText={taskText} handleAddTask={handleAddTask} setTaskText={setTaskText} />
      <div className='flex flex-col md:flex-row px-2 md:px-10'>
        <div className='basis-1/2'>
          <h3 className='py-2 text-center text-xl'>{tasks[0] && 'To Do :'} </h3>
          {tasks.map((taskData: taskType, i: number) => <TaskCard handleDeleteTask={handleDeleteTask} setTasks={setTasks} tasks={tasks} key={i} taskData={taskData} />)}
        </div>
        {/* <div className='basis-1/2'>
          <h3 className='py-2 text-center text-xl'>{tasks[0] && 'Done :'} </h3>
          {tasks.map((taskData: taskType, i: number) => <TaskCard key={i} taskData={taskData} />)}
        </div> */}
      </div>


    </div>
  )
}

export default App
