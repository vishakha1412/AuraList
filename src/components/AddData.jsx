 import React from 'react'
 import { useState} from 'react'
 import {useNavigate} from'react-router-dom';
 import {useDispatch} from 'react-redux';
import { addTodo } from '../features/todoSlice';
 

 
const AddData = () => {

  const [showWarning, setShowWarning] = useState(false);

  
   const dispatch = useDispatch();

  


  const[title,setTitle]=useState('')
      const[date,setDate]=useState('')
       const[time,setTime]=useState('')
        const navigate=useNavigate();

  const handleChange = (e) => {
    setTitle(e.target.value); 
    if (e.target.value.trim() === '') {
      setShowWarning(true);
       
    } else {
      setShowWarning(false);
     
    }
  }
  const createUser = () => {
    if (title.trim() === '') {
      setShowWarning(true);
      return;
    }
    
    const newTodo = {
      title: title,
      date: date,
      time: time,
      id: Date.now().toString()
    };
    
    dispatch(addTodo(newTodo));
    navigate('/tasks'); 
    setTitle('');
    setDate('');
    setTime('');
    setShowWarning(false);
     
  }
  
   
 
  
 






   return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-400 to-pink-100 p-6">
        <div className="w-full max-w-md bg-white/20 backdrop-blur-md rounded-xl shadow-xl p-8">
         <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Add New Task</h2>

         
            Text:  <input type='text' 
            placeholder='Enter your ideas'  onChange={handleChange } 
               className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition "

               />
            {showWarning && <p className="text-red-500 text-sm mb-4">Please enter a valid task title.</p>}
              Date: <input type='date'   onChange={(e)=>setDate(e.target.value)}
               className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />
 
              Time:<input type='time'   onChange={(e)=>setTime(e.target.value)} className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />


              <button onClick={createUser}  className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
         > ➕ Add Task
</button>
            
        </div>
      </div>
   )
 }
 export default AddData
 
