import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputField from './components/InputField/InputField'

function App() {
  const [count, setCount] = useState(0)
  let a: number;
  a = 5
  console.log(a);


  return (
    <div className="font-saira bg-[#2f74c0] text-white py-10 min-h-[100vh]">

      <h1 className="text-3xl text-center font-medium pt-10">
        Taskify <span className='text-base '>By Siam</span>
       
      </h1>


      <InputField/>
    </div>
  )
}

export default App
