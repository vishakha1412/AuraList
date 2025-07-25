import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [
            {
                 
                 
            }
],
        loading: false,
        error: null,
        done:false,

         
      
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
        setDone: (state, action) => {
            state.done = action.payload;
        },
        setTodos: (state, action) => {
            state.todos = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});
export const {
    addTodo,
    removeTodo,
    updateTodo,
    setDone,
    setTodos,
    setLoading,
    setError
} = todoSlice.actions;
export default todoSlice.reducer;
export const selectTodos = (state) => state.todo.todos;
export const selectLoading = (state) => state.todo.loading;
 
