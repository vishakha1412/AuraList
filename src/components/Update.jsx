import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams,useNavigate} from 'react-router-dom';
import { updateTodo } from '../features/todoSlice.js';
 const Update = () => {
    const {id} = useParams();
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const Todo = useSelector((state) => state.todo.todos);
    
    const todoToUpdate = Todo.find((todo) => todo.id === id);
    const [title, setTitle] = React.useState(todoToUpdate ? todoToUpdate.title : '');
    const [date, setDate] = React.useState(todoToUpdate ? todoToUpdate.date : '');
    const [time, setTime] = React.useState(todoToUpdate ? todoToUpdate.time : '');
      const [description,setContent] = React.useState(todoToUpdate ? todoToUpdate.description : '');
    const Edit = (id) => {
        const updatedTodo = {
            id: id,
            title: title,
            date: date,
            time: time,
            description: description,
             
        }
        
        dispatch(updateTodo(updatedTodo));
        navigate('/tasks');
    }
        
  return (
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-400 to-pink-100 p-6">
        <div className="w-full max-w-md bg-white/20 backdrop-blur-md rounded-xl shadow-xl p-8">
         <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Update Task </h2>

            
              Text:  <input type='text' placeholder='Enter your ideas'  onChange={(e)=>setTitle(e.target.value)} value={title}
               className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
/>
              Description: <textarea placeholder='Enter your ideas'  onChange={(e)=>setContent(e.target.value)} value={description}
               className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        ></textarea>
              Date: <input type='date'   onChange={(e)=>setDate(e.target.value)} value={date}
               className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />
 
              Time:<input type='time'   onChange={(e)=>setTime(e.target.value)}  value={time}className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />


              <button onClick={()=>Edit(id)}  className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
         > ➕ Update Task
</button>
            
        </div>
      </div>
  )
}
export default Update
