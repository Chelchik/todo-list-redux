import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCompleted, selectTodos } from '../features/todos/Todos'

function TodoFooter() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch()
  const newTodos = todos.filter((todo) => todo.isCompleted).length;

  const clearFunc = (nextTodo) => {
      dispatch(clearCompleted(nextTodo))
  }

  return (
    <div className='todosFooter'>
      <span>{todos.length}/{newTodos}</span>

      <button className='clearCompleted' onClick={clearFunc}>Clear completed</button>
    </div>
  )
}

export default TodoFooter