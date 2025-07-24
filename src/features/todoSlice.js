import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [
            {}
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
    setTodos,
    setLoading,
    setError
} = todoSlice.actions;
export default todoSlice.reducer;
export const selectTodos = (state) => state.todo.todos;
export const selectLoading = (state) => state.todo.loading;
export const selectError = (state) => state.todo.error;
export const selectTodoById = (state, id) => state.todo.todos.find(todo =>
    todo.id === id);
export const selectTodosByDate = (state, date) => state.todo.todos.filter(todo =>
    todo.date === date);
