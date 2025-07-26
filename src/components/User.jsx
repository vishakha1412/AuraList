import React, { useEffect, useState } from 'react'
import { useSelector  ,useDispatch} from 'react-redux';
import { useNavigate } from 'react-router';
import { removeTodo, updateTodo ,setDone} from '../features/todoSlice.js';
import { selectTodos } from '../features/todoSlice.js';

 



const User = () => {
 

  
    
     
    const navigate=useNavigate();
const dispatch = useDispatch();
const handleDelete = (id) => {
  dispatch(removeTodo(id));
  navigate('/tasks');
}
const handleUpdate = (id) => {
  navigate(`/update/${id}`);
}
 
 
const Todo= useSelector((state) => state.todo.todos)
     
     
    
  
  return (
    <>
    <div className='min-h-screen bg-linear-to-r from-cyan-500 to-blue-500 p-10'  >
        <button  onClick ={()=> navigate('/add')}className='bg-green-400   py-3 px-6 hover:bg-green-500 transition duration-300 rounded-3xl   mt-10 ml-10 text-white
        font-extrabold' > Create +</button>
        
      
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-7 pt-20 mt-5" >
    {Todo.map((item) => (
      <div  className="bg-white/20 bg-opacity-40 backdrop-blur-lg border border-white border-opacity-30 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 object-fill"  data-aos="zoom-in">

        <h3 className="text-xl font-semibold text-white">Title : {item.title}</h3>
        <p className="text-white mt-2">{item.description}</p>
        <p className="text-white mt-2">DATE : {item.date}</p>
        <p className="text-white mt-1">TIME : {item.time}</p>
         <div className="mt-4 flex gap-4">
    
     <div className='sm:flex sm:items-center sm:justify-between space-y-2 sm:space-y-0 space-x-2'>

    <button
      onClick={() => handleDelete(item.id)}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition min-w-[100px]"
    >
      Delete
    </button>
    <button
      onClick={() => handleUpdate(item.id)}
      className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-md text-sm font-medium transition  min-w-[100px]"
    >
      Update
    </button>
     
     
    </div>
     
  </div>
  </div>


      
    ))}



  </div>  
     </div>
    </>
  )
}
export default User
