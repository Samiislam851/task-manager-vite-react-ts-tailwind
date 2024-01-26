import React from 'react'
import './InputField.css'
import { IoIosAddCircleOutline } from 'react-icons/io'

const InputField = () => {

  let handleAddButton: (e: any) => void

  handleAddButton = (e) => {
    e.preventDefault()

  }

  return (
    <form className='mx-auto w-fit my-10 relative'>
      <input type="text" className="transition-all rounded-full ease-in-out duration-300 p-3 px-4 border-0 task-input focus:shadow-2xl" placeholder='Enter you task here    ' />
      <button onClick={handleAddButton} className='bg-[#2f74c0] clickable-element absolute  p-1 rounded-full border border-2 border-[#326aa5] right-[10px] top-1/2 translate-y-[-50%]'><IoIosAddCircleOutline /></button>
    </form>
  )
}

export default InputField
