import React from 'react'
import './InputField.css'
import { IoIosAddCircleOutline } from 'react-icons/io'
interface props {
  taskText: string;
  setTaskText: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: (e: React.FormEvent) => void
}
const InputField = ({ taskText, setTaskText, handleAddTask }: props) => {

  

  return (
    <form onSubmit={(e)=>handleAddTask(e)} className='mx-auto w-[50vw] min-w-fit  my-10 relative'>
      <input value={taskText} onChange={(e) => setTaskText(e.target.value)} type="text" className="transition-all rounded-full ease-in-out duration-300 p-3 px-4 border-0 task-input focus:shadow-2xl w-full" placeholder='Enter you task here    ' />
      <button type='submit' className='bg-[#2f74c0] clickable-element absolute  p-1 rounded-full border border-2 border-[#326aa5] right-[10px] top-1/2 translate-y-[-50%]'><IoIosAddCircleOutline /></button>
    </form>
  )
}

export default InputField
