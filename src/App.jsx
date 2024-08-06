import { useState } from 'react';
import './App.css';

import {FaPlus, FaPencilAlt, FaTrash} from 'react-icons/fa';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addtoDO = async() => {
    try {
      if(input.trim() !== ""){
        setTodos([...todos, {id: new Date(), todo: input}])
        setInput('')
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className='min-h-screen flex items-center flex-col gap-4 justify-center p-4 bg-custom-background'>
        <div className='bg-blue-300 p-6 rounded-lg shadow-md w-full max-w-lg'>
          <h1 className='text-3xl font-bold text-center mb-4'>To Do App</h1>
          <div className='flex '>
            <input type="text"
            placeholder='Add todo' 
            className='rounded p-4 w-full focus:outline-none mr-2'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addtoDO} className='bg-blue-700 hover:bg-blue-500 rounded text-white p-4'><FaPlus /></button>
          </div>
        </div>

        {
        todos.length > 0 && (
          <div className='bg-blue-300 p-6 rounded-lg shadow-md w-1/2'>
          <ul>
            {todos.map((todo, index) => (
              <li  key={index} className='flex items-center justify-between bg-white p-3 rounded shadow-md mb-3'>
              <span className='text-lg'>{todo.todo}</span>
              <div>
                 <button className='mr-2 p-2 text-white bg-black hover:bg-gray-700 rounded '><FaPencilAlt /></button>
              <button className='p-2 text-white bg-red-500 rounded hover:bg-red-400' ><FaTrash /></button>
              </div>
            </li>

            ))}
            
          </ul>
        </div>
        )
        }
    </div>
  )
}

export default App
