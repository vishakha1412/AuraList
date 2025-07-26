import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [
            {
                 
                  done:false,
            }
],
        loading: false,
        error: null,
       

         
      
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
            
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id);
            if (index !== -1) {
                state.todos[index] = action.payload;
            }
        },
        
         
         
        
    },
});
export const {
    addTodo,
    removeTodo,
    updateTodo,
    setDone,
    setTodos,
    
    
} = todoSlice.actions;
export default todoSlice.reducer;
export const selectTodos = (state) => state.todo.todos;
export const selectLoading = (state) => state.todo.loading;
 
