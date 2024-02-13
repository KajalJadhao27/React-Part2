import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
  todos: [{id: 1, text: "Hello world"}]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducer: {
    // whenever you give function we have acces of two things 1st state 2nd action
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo)
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => (action.payload === id ? todo : action.payload ))
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => 
        todo.id !== action.payload)
      }
    },
  }
)

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer